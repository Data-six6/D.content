import sys
import json
from pathlib import Path

# Add project root directory to sys.path so "from ml..." works from anywhere
ROOT_DIR = Path(__file__).resolve().parent.parent.parent
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

import pandas as pd
import numpy as np
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.cluster import KMeans, AgglomerativeClustering
from sklearn.metrics import silhouette_score, davies_bouldin_score, calinski_harabasz_score

from ml.models.hierarchical import InductiveHierarchicalClustering
from ml.config import (
    MODEL_READY_DATA_PATH,
    FEATURE_COLUMNS,
    CATEGORICAL_FEATURES,
    NUMERICAL_FEATURES,
    BEST_MODEL_PATH,
    SAVED_MODELS_DIR,
    BASE_DIR,
)


def build_preprocessor() -> ColumnTransformer:
    """Build the ColumnTransformer for numerical scaling and categorical one-hot encoding."""
    return ColumnTransformer(
        transformers=[
            ('num', StandardScaler(), NUMERICAL_FEATURES),
            ('cat', OneHotEncoder(handle_unknown='ignore', sparse_output=False), CATEGORICAL_FEATURES)
        ]
    )


def evaluate_models(X_transformed: np.ndarray) -> dict:
    """Evaluate K-Means and Hierarchical Clustering for K=2 through K=6."""
    print("\n" + "=" * 75)
    print(" EVALUATION BENCHMARK: PRE-POSTING FEATURE SPACE (13 FEATURES)")
    print("=" * 75)
    
    results = {
        "Hierarchical": {},
        "KMeans": {}
    }
    
    # 1. K-Means
    print("\n--- K-Means (K=2 to 6) ---")
    print(f"{'K':<4} | {'Silhouette':<12} | {'Davies-Bouldin':<15} | {'Calinski-Harabasz':<18} | {'Cluster Sizes'}")
    print("-" * 75)
    for k in range(2, 7):
        km = KMeans(n_clusters=k, random_state=42, n_init=10)
        labels = km.fit_predict(X_transformed)
        sil = float(silhouette_score(X_transformed, labels))
        db = float(davies_bouldin_score(X_transformed, labels))
        ch = float(calinski_harabasz_score(X_transformed, labels))
        sizes = [int(np.sum(labels == c)) for c in range(k)]
        
        results["KMeans"][str(k)] = {
            "silhouette": sil,
            "davies_bouldin": db,
            "calinski_harabasz": ch,
            "cluster_sizes": sizes
        }
        print(f"{k:<4} | {sil:<12.4f} | {db:<15.4f} | {ch:<18.2f} | {sizes}")
        
    # 2. Hierarchical (Ward Linkage)
    print("\n--- Hierarchical Agglomerative Clustering (Ward Linkage, K=2 to 6) ---")
    print(f"{'K':<4} | {'Silhouette':<12} | {'Davies-Bouldin':<15} | {'Calinski-Harabasz':<18} | {'Cluster Sizes'}")
    print("-" * 75)
    for k in range(2, 7):
        hac = AgglomerativeClustering(n_clusters=k, linkage='ward')
        labels = hac.fit_predict(X_transformed)
        sil = float(silhouette_score(X_transformed, labels))
        db = float(davies_bouldin_score(X_transformed, labels))
        ch = float(calinski_harabasz_score(X_transformed, labels))
        sizes = [int(np.sum(labels == c)) for c in range(k)]
        
        results["Hierarchical"][str(k)] = {
            "silhouette": sil,
            "davies_bouldin": db,
            "calinski_harabasz": ch,
            "cluster_sizes": sizes
        }
        print(f"{k:<4} | {sil:<12.4f} | {db:<15.4f} | {ch:<18.2f} | {sizes}")
        
    return results


def compute_cluster_mapping_and_profiles(df: pd.DataFrame, cluster_labels: np.ndarray) -> tuple:
    """Map clusters to Low/Medium/High based on historical average Engagement_Rate."""
    df_temp = df.copy()
    df_temp['Cluster'] = cluster_labels
    
    # Calculate average (mean) engagement rate for each cluster from the historical dataset
    cluster_stats = df_temp.groupby('Cluster')['Engagement_Rate'].mean().reset_index()
    cluster_stats = cluster_stats.sort_values(by='Engagement_Rate').reset_index(drop=True)
    
    # Order: Lowest average = Low, Middle = Medium, Highest = High
    labels = ["Low", "Medium", "High"]
    mapping = {int(cluster_stats.loc[i, 'Cluster']): labels[i] for i in range(len(labels))}
    
    print("\n" + "=" * 75)
    print(" CLUSTER INTERPRETATION & LABELING (Post-Hoc Historical Engagement)")
    print("=" * 75)
    profiles = {}
    for cluster_id, tier in mapping.items():
        c_df = df_temp[df_temp['Cluster'] == cluster_id]
        avg_rate = float(c_df['Engagement_Rate'].mean())
        count = int(len(c_df))
        common_platform = str(c_df['Platform'].mode()[0]) if 'Platform' in c_df else "Unknown"
        common_cat = str(c_df['Category'].mode()[0]) if 'Category' in c_df else "Unknown"
        avg_followers = float(c_df['Follower_Count'].mean()) if 'Follower_Count' in c_df else 0.0
        avg_hashtags = float(c_df['Hashtag_Count'].mean()) if 'Hashtag_Count' in c_df else 0.0
        common_sentiment = str(c_df['Sentiment'].mode()[0]) if 'Sentiment' in c_df else "Positive"
        
        profiles[f"Cluster_{cluster_id}"] = {
            "count": count,
            "tier": tier,
            "avg_engagement_rate": avg_rate,
            "common_platform": common_platform,
            "common_topic": common_cat,
            "avg_follower_count": avg_followers,
            "avg_hashtag_count": avg_hashtags,
            "common_sentiment": common_sentiment
        }
        print(f"  Cluster {cluster_id} -> {tier:<6} | Count: {count:<5} | Mean Historical Engagement: {avg_rate:.2f}%")
        print(f"      Top Platform: {common_platform:<9} | Top Topic: {common_cat:<12} | Avg Followers: {avg_followers:,.0f}")
        
    return mapping, profiles


def save_training_artifacts(pipeline: Pipeline, mapping: dict, metrics_payload: dict) -> None:
    """Save trained pipeline, cluster mapping, and metrics to disk."""
    SAVED_MODELS_DIR.mkdir(parents=True, exist_ok=True)
    joblib.dump(pipeline, BEST_MODEL_PATH)
    mapping_path = SAVED_MODELS_DIR / "cluster_mapping.pkl"
    joblib.dump(mapping, mapping_path)
    
    # Save metrics to root
    metrics_path = BASE_DIR / "metrics.json"
    with open(metrics_path, "w") as f:
        json.dump(metrics_payload, f, indent=4)
        
    print(f"\nSuccessfully saved artifacts to:")
    print(f"  - Pipeline       : {BEST_MODEL_PATH}")
    print(f"  - Mapping        : {mapping_path}")
    print(f"  - Metrics JSON   : {metrics_path}")


def train_unsupervised():
    """Main training orchestration function."""
    print("Loading model-ready dataset...")
    df = pd.read_csv(MODEL_READY_DATA_PATH)
    
    print(f"Total dataset rows: {len(df)}")
    print(f"Clustering feature space ({len(FEATURE_COLUMNS)} pre-posting attributes):")
    print(f"  Categorical: {CATEGORICAL_FEATURES}")
    print(f"  Numerical  : {NUMERICAL_FEATURES}")
    
    X = df[FEATURE_COLUMNS]
    
    print("\nBuilding preprocessing pipeline...")
    preprocessor = build_preprocessor()
    X_transformed = preprocessor.fit_transform(X)
    print(f"Transformed feature matrix shape: {X_transformed.shape} (45 dimensions)")
    
    # 1. Multi-K Benchmark Evaluation
    evaluation_metrics = evaluate_models(X_transformed)
    
    # 2. Train Selected Production Model: Hierarchical (Ward, K=3)
    print("\n" + "=" * 75)
    print(" TRAINING PRODUCTION MODEL: Inductive Hierarchical Clustering (K=3)")
    print("=" * 75)
    pipeline = Pipeline(steps=[
        ('preprocessor', preprocessor),
        ('clusterer', InductiveHierarchicalClustering(n_clusters=3))
    ])
    
    cluster_labels = pipeline.fit_predict(X)
    
    # 3. Post-Hoc Label Mapping from historical Engagement_Rate
    mapping, profiles = compute_cluster_mapping_and_profiles(df, cluster_labels)
    
    metrics_payload = {
        "metrics": evaluation_metrics,
        "profiles": profiles
    }
    
    # 4. Save Artifacts
    save_training_artifacts(pipeline, mapping, metrics_payload)
    print("\nTraining and benchmarking completed successfully!")


if __name__ == "__main__":
    train_unsupervised()
