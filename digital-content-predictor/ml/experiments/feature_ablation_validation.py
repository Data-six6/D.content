"""Empirical Feature Ablation Validation for Meateka ML Pipeline.

AUDIT / EXPERIMENT ONLY.
Does NOT modify or overwrite production models or configs.
"""

import sys
from pathlib import Path
import pandas as pd
import numpy as np

# Ensure root in sys.path
ROOT = Path(__file__).resolve().parent.parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.cluster import AgglomerativeClustering
from sklearn.metrics import (
    silhouette_score,
    davies_bouldin_score,
    calinski_harabasz_score,
    adjusted_rand_score,
    normalized_mutual_info_score,
)
from ml.config import MODEL_READY_DATA_PATH, CATEGORICAL_FEATURES, NUMERICAL_FEATURES


def run_ablation_audit():
    print("=" * 75)
    print(" MEATEKA ML: ACADEMIC FEATURE ABLATION VALIDATION")
    print("=" * 75)

    df = pd.read_csv(MODEL_READY_DATA_PATH)
    print(f"Dataset: {MODEL_READY_DATA_PATH.name}")
    print(f"Total Rows: {len(df)}")
    print(f"Total Features Evaluated: {len(CATEGORICAL_FEATURES) + len(NUMERICAL_FEATURES)}")

    # -------------------------------------------------------------
    # EXPERIMENT A: Baseline (All 13 features)
    # -------------------------------------------------------------
    num_A = NUMERICAL_FEATURES
    cat_A = CATEGORICAL_FEATURES
    ct_A = ColumnTransformer([
        ("num", StandardScaler(), num_A),
        ("cat", OneHotEncoder(handle_unknown="ignore", sparse_output=False), cat_A),
    ])
    X_A = ct_A.fit_transform(df[num_A + cat_A])
    hac_A = AgglomerativeClustering(n_clusters=3, linkage="ward")
    labels_A = hac_A.fit_predict(X_A)

    sil_A = float(silhouette_score(X_A, labels_A))
    db_A = float(davies_bouldin_score(X_A, labels_A))
    ch_A = float(calinski_harabasz_score(X_A, labels_A))
    sizes_A = [int(np.sum(labels_A == c)) for c in range(3)]
    dim_A = X_A.shape[1]

    # -------------------------------------------------------------
    # EXPERIMENT B: Ablation of Is_Verified (12 features)
    # -------------------------------------------------------------
    num_B = [f for f in NUMERICAL_FEATURES if f != "Is_Verified"]
    cat_B = CATEGORICAL_FEATURES
    ct_B = ColumnTransformer([
        ("num", StandardScaler(), num_B),
        ("cat", OneHotEncoder(handle_unknown="ignore", sparse_output=False), cat_B),
    ])
    X_B = ct_B.fit_transform(df[num_B + cat_B])
    hac_B = AgglomerativeClustering(n_clusters=3, linkage="ward")
    labels_B = hac_B.fit_predict(X_B)

    sil_B = float(silhouette_score(X_B, labels_B))
    db_B = float(davies_bouldin_score(X_B, labels_B))
    ch_B = float(calinski_harabasz_score(X_B, labels_B))
    sizes_B = [int(np.sum(labels_B == c)) for c in range(3)]
    dim_B = X_B.shape[1]

    # -------------------------------------------------------------
    # EXPERIMENT D: Ablation of Has_Media (12 features)
    # -------------------------------------------------------------
    num_D = [f for f in NUMERICAL_FEATURES if f != "Has_Media"]
    cat_D = CATEGORICAL_FEATURES
    ct_D = ColumnTransformer([
        ("num", StandardScaler(), num_D),
        ("cat", OneHotEncoder(handle_unknown="ignore", sparse_output=False), cat_D),
    ])
    X_D = ct_D.fit_transform(df[num_D + cat_D])
    hac_D = AgglomerativeClustering(n_clusters=3, linkage="ward")
    labels_D = hac_D.fit_predict(X_D)

    sil_D = float(silhouette_score(X_D, labels_D))
    db_D = float(davies_bouldin_score(X_D, labels_D))
    ch_D = float(calinski_harabasz_score(X_D, labels_D))
    sizes_D = [int(np.sum(labels_D == c)) for c in range(3)]
    dim_D = X_D.shape[1]

    # -------------------------------------------------------------
    # Statistical Agreement
    # -------------------------------------------------------------
    ari = float(adjusted_rand_score(labels_A, labels_B))
    nmi = float(normalized_mutual_info_score(labels_A, labels_B))
    contingency = pd.crosstab(
        pd.Series(labels_A, name="Exp A (With_Verified)"),
        pd.Series(labels_B, name="Exp B (Without_Verified)"),
    )

    # -------------------------------------------------------------
    # Print Results
    # -------------------------------------------------------------
    print("\n1. EXPERIMENT A (All 13 Features):")
    print(f"   Transformed Dim:    {dim_A}")
    print(f"   Silhouette Score:   {sil_A:.6f}")
    print(f"   Davies-Bouldin:     {db_A:.6f}")
    print(f"   Calinski-Harabasz:  {ch_A:.4f}")
    print(f"   Cluster Sizes:      {sizes_A}")

    print("\n2. EXPERIMENT B (Without Is_Verified):")
    print(f"   Transformed Dim:    {dim_B}")
    print(f"   Silhouette Score:   {sil_B:.6f}")
    print(f"   Davies-Bouldin:     {db_B:.6f}")
    print(f"   Calinski-Harabasz:  {ch_B:.4f}")
    print(f"   Cluster Sizes:      {sizes_B}")

    print("\n3. IS_VERIFIED IMPACT:")
    diff_sil = sil_A - sil_B
    pct_sil = (diff_sil / sil_B) * 100
    diff_db = db_A - db_B
    pct_db = (diff_db / db_B) * 100
    diff_ch = ch_A - ch_B
    pct_ch = (diff_ch / ch_B) * 100

    print(f"   Silhouette Diff:        {diff_sil:+.6f} ({pct_sil:+.2f}%)")
    print(f"   Davies-Bouldin Diff:    {diff_db:+.6f} ({pct_db:+.2f}%) [Lower is better]")
    print(f"   Calinski-Harabasz Diff: {diff_ch:+.4f} ({pct_ch:+.2f}%)")

    print("\n4. CLUSTER AGREEMENT & SHIFT:")
    print(f"   Adjusted Rand Index (ARI):     {ari:.4f}")
    print(f"   Normalized Mutual Info (NMI):  {nmi:.4f}")
    print("   Contingency Matrix (A vs B):")
    print(contingency)

    print("\n5. EXPERIMENT D (Without Has_Media):")
    print(f"   Transformed Dim:    {dim_D}")
    print(f"   Silhouette Score:   {sil_D:.6f}")
    print(f"   Davies-Bouldin:     {db_D:.6f}")
    print(f"   Calinski-Harabasz:  {ch_D:.4f}")
    print(f"   Cluster Sizes:      {sizes_D}")

    print("\nAudit complete. No production files modified.")


if __name__ == "__main__":
    run_ablation_audit()
