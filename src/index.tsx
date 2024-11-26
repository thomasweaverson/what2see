import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import {store} from './store';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions'; // checkAuthAction

import App from './components/app/app';


store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const promoMovie = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoMovie={promoMovie} />
    </Provider>
  </React.StrictMode>,
);
