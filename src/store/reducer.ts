import { createReducer } from '@reduxjs/toolkit';
import {
  setGenre,
  setFilms,
  setFilm,
  setReviews,
  setSimilarFilms,
  increaseShowingFilmsStep,
  resetShowingFilmsStep,
  setFilmsLoadingStatus,
  setFilmLoadingStatus,
  setReviewsLoadingStatus,
  setSimilarFilmsLoadingStatus,
  setAuthorizationStatus,
  setUser,
  setError,
} from './action';

import type { Film, Review } from '../types/types';
import { AuthorizationStatus } from '../const';
import { UserInfo } from '../types/user';

type State = {
  genre: string;
  films: Film[];
  currentFilm: Film | null;
  reviews: Review[];
  similarFilms: Film[];
  isFilmsLoadingStatus: boolean;
  isFilmLoadingStatus: boolean;
  isReviewsLoadingStatus: boolean;
  isSimilarFilmsLoadingStatus: boolean;
  showingFilmsStep: number;
  authorizationStatus: AuthorizationStatus;
  userInfo: UserInfo | null;
  error: string | null;
}

const initialState: State = {
  genre: 'All genres',
  films: [],
  currentFilm: null,
  reviews: [],
  similarFilms: [],
  isFilmsLoadingStatus: false,
  isFilmLoadingStatus: false,
  isReviewsLoadingStatus: false,
  isSimilarFilmsLoadingStatus: false,
  showingFilmsStep: 1,
  authorizationStatus: AuthorizationStatus.NoAuth,
  userInfo: null,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
  })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoadingStatus = action.payload;
    })
    .addCase(setFilmLoadingStatus, (state, action) => {
      state.isFilmLoadingStatus = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsLoadingStatus = action.payload;
    })
    .addCase(setSimilarFilmsLoadingStatus, (state, action) => {
      state.isSimilarFilmsLoadingStatus = action.payload;
    })
    .addCase(increaseShowingFilmsStep, (state) => {
      state.showingFilmsStep += 1;
    })
    .addCase(resetShowingFilmsStep, (state) => {
      state.showingFilmsStep = 1;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
