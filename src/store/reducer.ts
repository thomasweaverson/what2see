import { createReducer } from '@reduxjs/toolkit';
import { setGenre, setFilms, increaseShowingFilmsStep, resetShowingFilmsStep, setFilmsLoadingStatus } from './action';

import type { Film } from '../types/types';

type State = {
  genre: string;
  films: Film[];
  isFilmsLoadingStatus: boolean;
  showingFilmsStep: number;
}

const initialState: State = {
  genre: 'All genres',
  films: [],
  isFilmsLoadingStatus: false,
  showingFilmsStep: 1,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(setFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(setFilmsLoadingStatus, (state, action) => {
    state.isFilmsLoadingStatus = action.payload;
  });
  builder.addCase(increaseShowingFilmsStep, (state) => {
    state.showingFilmsStep += 1;
  });
  builder.addCase(resetShowingFilmsStep, (state) => {
    state.showingFilmsStep = 1;
  });
});

export { reducer };
