import { createReducer } from '@reduxjs/toolkit';
import { setGenre, setFilms } from './action';

import type { Film } from '../types/types';

type State = {
  genre: string;
  films: Film[];
}

const initialState: State = {
  genre: 'All genres',
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(setFilms, (state, action) => {
    state.films = action.payload;
  });
});

export { reducer };
