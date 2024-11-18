import { createReducer } from '@reduxjs/toolkit';
import { setGenre, setFilms, increaseShowingFilmsStep, resetShowingFilmsStep } from './action';

import type { Film } from '../types/types';

type State = {
  genre: string;
  films: Film[];
  showingFilmsStep: number;
}

const initialState: State = {
  genre: 'All genres',
  films: [],
  showingFilmsStep: 1,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(setFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(increaseShowingFilmsStep, (state) => {
    state.showingFilmsStep += 1;
  });
  builder.addCase(resetShowingFilmsStep, (state) => {
    state.showingFilmsStep = 1;
  });
});

export { reducer };
