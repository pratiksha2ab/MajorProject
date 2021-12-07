import numpy as np
import pandas as pd


class PCorr:
    def __init__(self, meta, matrix, n, similar_genre=True):
        self.meta = meta
        self.matrix = matrix
        self.n = n
        self.similar_genre = similar_genre
        self.GENRE_WEIGHT = 0.1

    def pearsonR(self, s1, s2):
        s1_c = s1 - s1.mean()
        s2_c = s2 - s2.mean()
        return np.sum(s1_c * s2_c) / np.sqrt(np.sum(s1_c ** 2) * np.sum(s2_c ** 2))

    def recommend(self, input_movie):
        input_genres = self.meta[self.meta['title'] == input_movie]['genres'].iloc(0)[
            0]
        result = []
        for title in self.matrix.columns:

            if title == input_movie:
                continue
            cor = self.pearsonR(self.matrix[input_movie], self.matrix[title])
            if self.similar_genre and len(input_genres) > 0:
                temp_genres = self.meta[self.meta['title'] == title]['genres'].iloc(0)[
                    0]
                same_count = np.sum(np.isin(input_genres, temp_genres))
                cor += (self.GENRE_WEIGHT * same_count)
            if np.isnan(cor):
                continue
            else:
                result.append((title, '{:.2f}'.format(cor), temp_genres))

        result.sort(key=lambda r: r[1], reverse=True)
        return result[:self.n]
