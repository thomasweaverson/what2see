import { createReducer } from '@reduxjs/toolkit';
import { setGenre, setFilms, increaseShowingFilmsStep, resetShowingFilmsStep, setFilmsLoadingStatus, setAuthorizationStatus, setUser } from './action';

import type { Film } from '../types/types';
import { AuthorizationStatus } from '../const';
import { UserInfo } from '../types/user';

type State = {
  genre: string;
  films: Film[];
  isFilmsLoadingStatus: boolean;
  showingFilmsStep: number;
  authorizationStatus: AuthorizationStatus;
  userInfo: UserInfo | null;
}

const initialState: State = {
  genre: 'All genres',
  films: [],
  isFilmsLoadingStatus: false,
  showingFilmsStep: 1,
  authorizationStatus: AuthorizationStatus.NoAuth,
  userInfo: null
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
  })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoadingStatus = action.payload;
    })
    .addCase(increaseShowingFilmsStep, (state) => {
      state.showingFilmsStep += 1;
    })
    .addCase(resetShowingFilmsStep, (state) => {
      state.showingFilmsStep = 1;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.userInfo = action.payload;
    });
});

export { reducer };
