import pandas as pd
import numpy as np
import json
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.cluster import AgglomerativeClustering, KMeans, DBSCAN
from sklearn.metrics import silhouette_score, davies_bouldin_score, calinski_harabasz_score

def main():
    df = pd.read_csv('data/processed/model_ready_dataset.csv')
    
    # Feature Selection
    cat_features = ["Platform", "Content_Type", "Category", "Day_of_Week", "Sentiment", "Influencer_Tier"]
    num_features = ["Hour_of_Day", "Month", "Hashtag_Count", "Content_Length", "Follower_Count", "Has_Media", "Is_Verified"]
    
    X_raw = df[cat_features + num_features]
    
    # Preprocessing
    preprocessor = ColumnTransformer(
        transformers=[
            ('num', StandardScaler(), num_features),
            ('cat', OneHotEncoder(sparse_output=False, handle_unknown='ignore'), cat_features)
        ]
    )
    X = preprocessor.fit_transform(X_raw)
    
    results = {'Hierarchical': {}, 'KMeans': {}, 'DBSCAN': {}}
    
    # 1. Hierarchical
    for k in range(2, 7):
        model = AgglomerativeClustering(n_clusters=k, linkage='ward')
        labels = model.fit_predict(X)
        results['Hierarchical'][k] = {
            'silhouette': float(silhouette_score(X, labels)),
            'davies_bouldin': float(davies_bouldin_score(X, labels)),
            'calinski_harabasz': float(calinski_harabasz_score(X, labels))
        }
        
    # 2. KMeans
    for k in range(2, 7):
        model = KMeans(n_clusters=k, random_state=42, n_init=10)
        labels = model.fit_predict(X)
        results['KMeans'][k] = {
            'silhouette': float(silhouette_score(X, labels)),
            'davies_bouldin': float(davies_bouldin_score(X, labels)),
            'calinski_harabasz': float(calinski_harabasz_score(X, labels))
        }
        
    # 3. DBSCAN
    eps_vals = [1.0, 1.5, 2.0, 2.5]
    min_samples_vals = [5, 10, 15]
    best_dbscan = None
    best_dbscan_score = -1
    
    for eps in eps_vals:
        for ms in min_samples_vals:
            model = DBSCAN(eps=eps, min_samples=ms)
            labels = model.fit_predict(X)
            n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
            if n_clusters > 1:
                sil = float(silhouette_score(X, labels))
                if sil > best_dbscan_score:
                    best_dbscan_score = sil
                    results['DBSCAN'] = {
                        'eps': eps,
                        'min_samples': ms,
                        'n_clusters': n_clusters,
                        'noise_points': int(sum(labels == -1)),
                        'silhouette': sil,
                        'davies_bouldin': float(davies_bouldin_score(X, labels)),
                        'calinski_harabasz': float(calinski_harabasz_score(X, labels))
                    }
                    
    if not results['DBSCAN']:
        results['DBSCAN'] = "Failed to find >1 clusters across tested params"
        
    # Profile K=3 Hierarchical (Baseline expectation)
    final_model = AgglomerativeClustering(n_clusters=3, linkage='ward')
    df['Cluster'] = final_model.fit_predict(X)
    
    profiles = {}
    for c in range(3):
        c_df = df[df['Cluster'] == c]
        profiles[f"Cluster_{c}"] = {
            'count': len(c_df),
            'avg_engagement_rate': float(c_df['Engagement_Rate'].mean()),
            'common_platform': str(c_df['Platform'].mode()[0]),
            'common_topic': str(c_df['Category'].mode()[0]),
            'avg_follower_count': float(c_df['Follower_Count'].mean()),
            'avg_hashtag_count': float(c_df['Hashtag_Count'].mean()),
            'common_sentiment': str(c_df['Sentiment'].mode()[0])
        }
        
    output = {
        'metrics': results,
        'profiles': profiles
    }
    
    with open('metrics.json', 'w') as f:
        json.dump(output, f, indent=4)

if __name__ == "__main__":
    main()
