import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppProcess } from '../../types/state';


const initialState: AppProcess = {
  genre: 'All genres',
  showingFilmsStep: 1,
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.AppProcess,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      if (state.genre === action.payload) {
        return;
      }
      state.genre = action.payload;
      state.showingFilmsStep = 1;
    },
    increaseShowingFilmsStep: (state) => {
      state.showingFilmsStep += 1;
    },
    resetShowingFilmsStep: (state) => {
      state.showingFilmsStep = 1;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setGenre, increaseShowingFilmsStep, resetShowingFilmsStep, setError, clearError } = appProcess.actions;
