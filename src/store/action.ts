import { createAction } from '@reduxjs/toolkit';
import type { Film } from '../types/types';
import { AuthorizationStatus } from '../const';
import { UserInfo } from '../types/user';

export const Action = {
  SET_GENRE: 'genre/set',
  SET_FILMS: 'data/setFilms',
  SET_FILMS_LOADING_STATUS: 'data/setFilmsLoadingStatus',
  INCREASE_SHOWING_FILMS_STEP: 'showingFilmsStep/increase',
  RESET_SHOWING_FILMS_STEP: 'showingFilmsStep/reset',
  SET_AUTHORIZATION_STATUS: 'user/setAuthorizationStatus',
  SET_USER: 'user/setUser',
  SET_ERROR: 'user/setError'
};

export const setGenre = createAction<string>(Action.SET_GENRE);
export const increaseShowingFilmsStep = createAction(Action.INCREASE_SHOWING_FILMS_STEP);
export const resetShowingFilmsStep = createAction(Action.RESET_SHOWING_FILMS_STEP);
export const setFilms = createAction<Film[]>(Action.SET_FILMS);
export const setFilmsLoadingStatus = createAction<boolean>(Action.SET_FILMS_LOADING_STATUS);
export const setAuthorizationStatus = createAction<AuthorizationStatus>(Action.SET_AUTHORIZATION_STATUS);
export const setUser = createAction<UserInfo>(Action.SET_USER);
export const setError = createAction<string | null>(Action.SET_ERROR);

