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
}

function App({promoMovie}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main promoMovie={promoMovie} />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Films}/:id`}
          element={<FilmScreen />}
        />
        <Route
          path={`${AppRoute.Player}/:id`}
          element={<Player />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={`films/:id${AppRoute.AddReview}`}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

