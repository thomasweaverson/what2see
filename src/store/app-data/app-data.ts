import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchFilms, fetchFilm, fetchSimilarFilms, fetchReviews, sendReview } from '../action';
import { executeGenres } from '../../utils/filter-utils';

const initialState: AppData = {
  films: [],
  isFilmsLoadingStatus: false,
  currentFilm: null,
  isCurrentFilmLoadingStatus: false,
  reviews: [],
  isReviewsLoadingStatus: false,
  similarFilms: [],
  isSimilarFilmsLoadingStatus: false,
  genres: ['All genres'],
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {
    resetCurrentFilm: (state) => {
      state.currentFilm = null;
    },
    setGenres: (state, action: PayloadAction<string[]>) => {
      state.genres = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isFilmsLoadingStatus = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoadingStatus = false;
        state.genres = executeGenres(action.payload);
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.isFilmsLoadingStatus = false;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.isCurrentFilmLoadingStatus = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.isCurrentFilmLoadingStatus = false;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.isCurrentFilmLoadingStatus = false;
      })
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.isSimilarFilmsLoadingStatus = true;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isSimilarFilmsLoadingStatus = false;
      })
      .addCase(fetchSimilarFilms.rejected, (state) => {
        state.isSimilarFilmsLoadingStatus = false;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.isReviewsLoadingStatus = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoadingStatus = false;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.isReviewsLoadingStatus = false;
      })
      .addCase(sendReview.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});

export const {resetCurrentFilm} = appData.actions;
