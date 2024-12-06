import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import type { Film, Review } from '../types/types';

import {
  setFilms,
  setFilm,
  setSimilarFilms,
  setReviews,
  setFilmsLoadingStatus,
  setFilmLoadingStatus,
  setSimilarFilmsLoadingStatus,
  setReviewsLoadingStatus,
  setAuthorizationStatus,
  setError,
  setUser
} from './action';

import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from './';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserInfo, UserReview } from '../types/user';

export const clearErrorAction = createAsyncThunk(
  'user/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchFilms',
    async (_arg, {dispatch, extra: api}) => {

      try {
        dispatch(setFilmsLoadingStatus(true));
        const {data} = await api.get<Film[]>(APIRoute.Films);

        dispatch(setFilms(data));
      } catch (error) {
        dispatch(setError((error as Error).message));
        dispatch(setFilms([]));
      }
      finally {
        dispatch(setFilmsLoadingStatus(false));
      }
    }
  );

export const fetchFilmAction = createAsyncThunk<void, number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchFilm',
    async (id, {dispatch, extra: api}) => {
      try {
        dispatch(setFilmLoadingStatus(true));
        const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
        dispatch(setFilm(data));
      } catch (error) {
        dispatch(setError((error as Error).message));
      }
      finally {
        dispatch(setFilmLoadingStatus(false));
      }
    }
  );

export const fetchSimilarFilmsAction = createAsyncThunk<void, number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchSimilarFilms',
    async (id, {dispatch, extra: api}) => {
      try {
        dispatch(setSimilarFilmsLoadingStatus(true));
        const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
        dispatch(setSimilarFilms(data));
      } catch (error) {
        dispatch(setError((error as Error).message));
      }
      finally {
        dispatch(setSimilarFilmsLoadingStatus(false));
      }
    }
  );

export const fetchReviewsAction = createAsyncThunk<void, number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchReviews',
    async (id, {dispatch, extra: api}) => {
      try {
        dispatch(setReviewsLoadingStatus(true));
        const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
        dispatch(setReviews(data));
      } catch (error) {
        dispatch(setError((error as Error).message));
      }
      finally {
        dispatch(setReviewsLoadingStatus(false));
      }
    }
  );

export const sendReviewAction = createAsyncThunk<boolean, UserReview,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchUserReview',
    async ({comment, rating, filmId}, {dispatch, extra: api}) => {
      try {
        const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
        dispatch(setReviews(data));
        return true;
      } catch (error) {
        dispatch(setError((error as Error).message));
        return false;
      }
    }
  );

export const checkAuthAction = createAsyncThunk<void, undefined,{
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {
      try {
        await api.get(APIRoute.Login);
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));

        const {data} = await api.get<UserInfo>(APIRoute.Login);
        dispatch(setUser(data));
      }
      catch {
        dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      }
    }
  );

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async (authData, {dispatch, extra: api}) => {
      const {data} = await api.post<UserInfo>(APIRoute.Login, authData);
      const token = data.token;
      saveToken(token);
      dispatch(setUser(data));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    }
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);

//@thws history в логин экшн. Чтобы возвращать к исходной странице
