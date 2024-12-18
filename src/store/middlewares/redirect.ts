import { Middleware } from '@reduxjs/toolkit';
import { Action, RedirectToRoute } from '../action';
import browserHistory from '../../browser-history';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
(_store) =>
  (next) =>
    (action: RedirectToRoute) => {
      if (action.type === Action.REDIRECT_TO_ROUTE) {
        browserHistory.push(action.payload);
      }

      return next(action);

    };
