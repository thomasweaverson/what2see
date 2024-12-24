import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import FilmScreen from '../../pages/film-screen/film-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import AddReview from '../../pages/add-review/add-review';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type PromoMovieInfo = {
  title: string;
  genre: string;
  year: number;
}

type AppProps = {
  promoMovie: PromoMovieInfo;
}

function App({promoMovie}: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
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
          element={isAuthorized ? <Main /> : <SignIn />}
        />
        <Route
          path={`${AppRoute.Films}/:id${AppRoute.AddReview}`}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>

  );
}

export default App;

