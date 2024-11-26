import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import type { Film } from '../types/types';
import { setFilms, setFilmsLoadingStatus, setAuthorizationStatus, setError, setUser } from './action';
// saveToken dropToken
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from './';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserInfo } from '../types/user';
//AuthData type
//UserData type

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
      try {
        const {data} = await api.post<UserInfo>(APIRoute.Login, authData);
        const token = data.token;
        saveToken(token);
        dispatch(setUser(data));
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));

      } catch {
        dispatch(setAuthorizationStatus(AuthorizationStatus.Unknown));
      }
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
