import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import type { Film } from '../types/types';
import { setFilms, setFilmsLoadingStatus } from './action';
// saveToken dropToken
import { APIRoute } from '../const';
//AuthData type
//UserData type

export const fetchFilmsAction = createAsyncThunk<void, undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchFilms',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(setFilmsLoadingStatus(true));
      try {
        const {data} = await api.get<Film[]>(APIRoute.Films);

        dispatch(setFilms(data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Ошибка загрузки фильмов:', error);
        dispatch(setFilms([]));
      }
      finally {
        dispatch(setFilmsLoadingStatus(false));
      }
    }
  );

