import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { setFilms } from './action';
import { FILMS } from '../mocks/films';

export const store = configureStore({reducer});

store.dispatch(setFilms(FILMS));


