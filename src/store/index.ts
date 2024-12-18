import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';
import browserHistory from '../browser-history';
import { checkAuth, fetchFilms } from './action';
import { rootReducer } from './root-reducer';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          history: browserHistory
        }
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchFilms());

export default store;
