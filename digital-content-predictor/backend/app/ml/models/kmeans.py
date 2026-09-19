"""Inductive KMeans clustering model with soft similarity probabilities."""

from sklearn.base import BaseEstimator, ClusterMixin
from sklearn.cluster import KMeans
import numpy as np


class InductiveKMeans(BaseEstimator, ClusterMixin):
    """Inductive wrapper around Scikit-Learn's KMeans.
    
    Provides:
    1. Exact cluster centroids retention.
    2. Cluster assignment via Euclidean distance to centroids (predict).
    3. Temperature-scaled soft cluster-membership similarity confidence (predict_proba).
    """

    def __init__(self, n_clusters: int = 3, random_state: int = 42):
        self.n_clusters = n_clusters
        self.random_state = random_state
        self.model = KMeans(n_clusters=n_clusters, random_state=random_state, n_init=10)
        self.centroids_ = None

    def fit(self, X, y=None):
        self.labels_ = self.model.fit_predict(X)
        self.classes_ = np.unique(self.labels_)
        self.centroids_ = self.model.cluster_centers_
        return self

    def _distances(self, X):
        distances = np.zeros((X.shape[0], self.n_clusters))
        for k in range(self.n_clusters):
            distances[:, k] = np.linalg.norm(X - self.centroids_[k], axis=1)
        return distances

    def predict(self, X):
        distances = self._distances(X)
        return self.classes_[np.argmin(distances, axis=1)]

    def predict_proba(self, X):
        distances = self._distances(X)
        T = np.mean(distances) / 2.0
        if T == 0:
            T = 1.0
        exp_d = np.exp(-distances / T)
        return exp_d / np.sum(exp_d, axis=1, keepdims=True)
