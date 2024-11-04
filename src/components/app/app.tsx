import type {Film} from '../../types/film';

import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';

import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import FilmScreen from '../../pages/film-screen/film-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import AddReview from '../../pages/add-review/add-review';

type PromoMovieInfo = {
  title: string;
  genre: string;
  year: number;
}

type AppProps = {
  promoMovie: PromoMovieInfo;
  films: Film[];
}

function App({promoMovie, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main promoMovie={promoMovie} films={films}/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films.filter((film) => film.isFavorite).map((film) => ({id: film.id, name: film.name, previewImage: film.previewImage, previewVideoLink: film.previewVideoLink}))}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Films}/:id`}
          element={<FilmScreen films={films} />}
        />
        <Route
          path={`${AppRoute.Player}/:id`}
          element={<Player films={films.map((film) => ({id: film.id, posterImage: film.posterImage, videoLink: film.videoLink}))} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={`films/:id${AppRoute.AddReview}`}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <AddReview films={films.map((film) => ({id: film.id, name: film.name, backgroundImage: film.backgroundImage, posterImage: film.posterImage}))}/>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

