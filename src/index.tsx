import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
    <App promoMovie={promoMovie}/>
  </React.StrictMode>,
);
