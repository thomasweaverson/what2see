import Footer from '../../components/footer/footer';

import GenresList from '../../components/genres-list/genres-list';
import FilmsList from '../../components/films-list/films-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { filterFilmsByGenre, getGenres } from '../../utils/filter-utils';
import { SHOWING_FILMS_PER_STEP } from '../../const';
import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { resetShowingFilmsStep, setGenre } from '../../store/action';
import Header from '../../components/header/header';

type PromoMovieInfo = {
  title: string;
  genre: string;
  year: number;
}

type MainProps = {
  promoMovie: PromoMovieInfo;
}
function Main({promoMovie}: MainProps): JSX.Element {
  const dispatch = useAppDispatch();

  const {isFilmsLoadingStatus, genre, showingFilmsStep, films} = useAppSelector((state) => state);

  const location = useLocation();

  const filteredFilms = useMemo(() => filterFilmsByGenre(films, genre), [films, genre]);

  const showingFilms = useMemo(() => filteredFilms.slice(0, showingFilmsStep * SHOWING_FILMS_PER_STEP), [filteredFilms, showingFilmsStep]);

  const isAllFilmsShowing = useMemo(() => (showingFilmsStep * SHOWING_FILMS_PER_STEP >= filteredFilms.length), [showingFilmsStep, filteredFilms.length]);

  const genres = getGenres(films);

  useEffect(() => {
    dispatch(resetShowingFilmsStep());
    dispatch(setGenre('All genres'));
  }, [dispatch, location.pathname]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={`${promoMovie.title} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoMovie.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoMovie.genre}</span>
                <span className="film-card__year">{promoMovie.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} />

          <FilmsList films={showingFilms.map((film) => ({id: film.id, name: film.name, previewImage: film.previewImage, previewVideoLink: film.previewVideoLink}))} />
          {!isFilmsLoadingStatus && !isAllFilmsShowing && <ShowMoreButton />}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Main;
