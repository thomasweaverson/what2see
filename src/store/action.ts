import { createAction, PayloadAction } from '@reduxjs/toolkit';
import type { Film, Review } from '../types/types';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserInfo } from '../types/user';

export const Action = {
  SET_GENRE: 'genre/set',

  SET_FILMS: 'data/setFilms',
  SET_FILM: 'data/setFilm',
  SET_REVIEWS: 'data/setReviews',
  SET_SIMILAR_FILMS: 'data/setSimilarFilms',

  SET_FILMS_LOADING_STATUS: 'data/setFilmsLoadingStatus',
  SET_FILM_LOADING_STATUS: 'data/setFilmLoadingStatus',
  SET_REVIEWS_LOADING_STATUS: 'data/setReviewsLoadingStatus',
  SET_SIMILAR_FILMS_LOADING_STATUS: 'data/setSimilarFilmsLoadingStatus',

  INCREASE_SHOWING_FILMS_STEP: 'showingFilmsStep/increase',
  RESET_SHOWING_FILMS_STEP: 'showingFilmsStep/reset',

  SET_AUTHORIZATION_STATUS: 'user/setAuthorizationStatus',
  SET_USER: 'user/setUser',

  SET_ERROR: 'user/setError',

  REDIRECT_TO_ROUTE: 'redirect/redirectToRoute'
};

export const setGenre = createAction<string>(Action.SET_GENRE);
export const increaseShowingFilmsStep = createAction(Action.INCREASE_SHOWING_FILMS_STEP);
export const resetShowingFilmsStep = createAction(Action.RESET_SHOWING_FILMS_STEP);

export const setFilms = createAction<Film[]>(Action.SET_FILMS);
export const setFilm = createAction<Film>(Action.SET_FILM);
export const setReviews = createAction<Review[]>(Action.SET_REVIEWS);
export const setSimilarFilms = createAction<Film[]>(Action.SET_SIMILAR_FILMS);

export const setFilmsLoadingStatus = createAction<boolean>(Action.SET_FILMS_LOADING_STATUS);
export const setFilmLoadingStatus = createAction<boolean>(Action.SET_FILM_LOADING_STATUS);
export const setReviewsLoadingStatus = createAction<boolean>(Action.SET_REVIEWS_LOADING_STATUS);
export const setSimilarFilmsLoadingStatus = createAction<boolean>(Action.SET_SIMILAR_FILMS_LOADING_STATUS);

export const setAuthorizationStatus = createAction<AuthorizationStatus>(Action.SET_AUTHORIZATION_STATUS);
export const setUser = createAction<UserInfo>(Action.SET_USER);

export const setError = createAction<string | null>(Action.SET_ERROR);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export type RedirectToRouteAction = PayloadAction<string, typeof Action.REDIRECT_TO_ROUTE>;
