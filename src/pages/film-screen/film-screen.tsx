import { useParams, Link, useNavigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

// import NotFoundScreen from '../not-found-screen/not-found-screen';
import FilmDescription from '../../components/film-description/film-description';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import Footer from '../../components/footer/footer';

import { useAppDispatch, useAppSelector } from '../../hooks';
import Loader from '../../components/loader/loader';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getCurrentFilm, getReviews, getSimilarFilms } from '../../store/app-data/selectors';
import { fetchFilm, fetchReviews, fetchSimilarFilms } from '../../store/action';
import MyListButton from '../../components/my-list-button/my-list-button';

function FilmScreen() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const id = Number(useParams().id);

  const film = useAppSelector(getCurrentFilm);
  const similarMovies = useAppSelector(getSimilarFilms);
  const reviews = useAppSelector(getReviews);

  const isFavorite = film?.isFavorite || false;
  const handlePlayButtonClick = () => {
    navigate(`${AppRoute.Player}/${id}`);
  };

  useEffect(() => {
    dispatch(fetchFilm(id));
    dispatch(fetchSimilarFilms(id));
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <MyListButton filmId={id} isFavorite={isFavorite} />
                {isAuthorized &&
                <Link to={`${AppRoute.Films}/${id}${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>

            {film === null ? <Loader/> : <FilmDescription film={film} reviews={reviews}/>}

          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis films={similarMovies} />
        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
