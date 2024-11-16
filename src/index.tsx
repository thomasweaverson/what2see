import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';

import {store} from './store';

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
