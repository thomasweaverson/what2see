import type { History } from 'history';
import type { AxiosInstance, AxiosError } from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import type { Film, Review } from '../types/types';
import type { AuthData } from '../types/auth-data';
import { UserInfo } from '../types/user';

import { APIRoute, AppRoute, HttpCode } from '../const';
import { dropToken, saveToken } from '../services/token';

import { UserReview } from '../types/user';

type Extra = {
  api: AxiosInstance;
  history: History;
}

export const Action = {
  FETCH_FILMS: 'films/fetch',
  FETCH_FILM: 'film/fetch',
  FETCH_SIMILAR_FILMS: 'films/fetch-similar',
  FETCH_REVIEWS: 'film/fetch-reviews',
  ADD_REVIEW: 'review/add',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  CHECK_AUTH: 'user/check-auth',
  REDIRECT_TO_ROUTE: 'redirect-to-route',
};

export const fetchFilms = createAsyncThunk<Film[], undefined, { extra: Extra }>(
  Action.FETCH_FILMS,
  async (_arg, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Film[]>(APIRoute.Films);
    return data;
  }
);

export const fetchFilm = createAsyncThunk<Film, number, {extra: Extra}>(
  Action.FETCH_FILM,
  async (id, { extra }) => {
    const { api, history } = extra;
    try {
      const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }

      return Promise.reject(error);
    }
  }
);

export const fetchSimilarFilms = createAsyncThunk<Film[], number, { extra: Extra}>(
  Action.FETCH_SIMILAR_FILMS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], number, { extra: Extra }>(
  Action.FETCH_REVIEWS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const sendReview = createAsyncThunk<Review[], UserReview, { extra: Extra }>(
  Action.ADD_REVIEW,
  async ({comment, rating, filmId}, { extra }) => {
    const { api } = extra;
    const { data } = await api.post<Review[]>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    return data;
  }
);

export const checkAuth = createAsyncThunk<UserInfo, undefined,{ extra: Extra }>(
  Action.CHECK_AUTH,
  async (_arg, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<UserInfo>(APIRoute.Login);
    return data;
  }
);

export const login = createAsyncThunk<UserInfo, AuthData, { extra: Extra }>(
  Action.LOGIN,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post<UserInfo>(APIRoute.Login, { email, password });
    const { token } = data;
    saveToken(token);
    history.push(AppRoute.Main);
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, { extra: Extra }>(
  Action.LOGOUT,
  async (_arg, { extra }) => {
    const { api } = extra;
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export type RedirectToRoute = ReturnType<typeof redirectToRoute>;

//@thws history в логин экшн. Чтобы возвращать к исходной странице

// export const clearErrorAction = createAsyncThunk(
//   'user/clearError',
//   () => {
//     setTimeout(
//       () => store.dispatch(setError(null)),
//       TIMEOUT_SHOW_ERROR
//     );
//   },
// );
