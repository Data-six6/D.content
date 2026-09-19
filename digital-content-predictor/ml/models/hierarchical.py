from sklearn.base import BaseEstimator, ClusterMixin
from sklearn.cluster import AgglomerativeClustering
import numpy as np

class InductiveHierarchicalClustering(BaseEstimator, ClusterMixin):
    """Inductive wrapper around Scikit-Learn's AgglomerativeClustering (Hierarchical Clustering).
    
    Standard AgglomerativeClustering is transductive (cannot predict on new unseen points
    without recomputing the pairwise distance matrix across all points).
    
    This inductive wrapper:
    1. Fits AgglomerativeClustering (Ward linkage) on the training set.
    2. Calculates and retains the centroid (mean vector) of each discovered cluster in the feature space.
    3. Assigns any new unseen draft post to the nearest learned cluster centroid via Euclidean distance.
    4. Computes calibrated soft membership probabilities using temperature-scaled softmax over negative distances.
    """
    def __init__(self, n_clusters=3):
        self.n_clusters = n_clusters
        self.model = AgglomerativeClustering(n_clusters=n_clusters)
        self.centroids_ = None

    def fit(self, X, y=None):
        # 1. Fit hierarchical clustering
        self.labels_ = self.model.fit_predict(X)
        self.classes_ = np.unique(self.labels_)
        
        # 2. Calculate the centroid (mean) of each discovered cluster
        self.centroids_ = np.array([X[self.labels_ == c].mean(axis=0) for c in self.classes_])
        return self

    def _distances(self, X):
        # Calculate Euclidean distance from each point in X to each centroid
        # X is (N, D), centroids is (K, D)
        # Returns (N, K) distances
        distances = np.zeros((X.shape[0], self.n_clusters))
        for k in range(self.n_clusters):
            distances[:, k] = np.linalg.norm(X - self.centroids_[k], axis=1)
        return distances

    def predict(self, X):
        # Assign to the closest centroid
        distances = self._distances(X)
        return self.classes_[np.argmin(distances, axis=1)]
        
    def predict_proba(self, X):
        # Convert distances to soft probabilities using softmax on negative distances
        # We add a scaling factor (temperature) to make the probabilities more distinct
        distances = self._distances(X)
        
        # Softmax: exp(-d) / sum(exp(-d))
        # Using a temperature T to scale distances. If distances are large, 
        # probabilities become 1.0 and 0.0 very quickly. 
        # By normalizing, we get smoother probability distributions.
        T = np.mean(distances) / 2.0  # Adaptive temperature
        if T == 0:
            T = 1.0
            
        exp_d = np.exp(-distances / T)
        probs = exp_d / np.sum(exp_d, axis=1, keepdims=True)
        return probs
