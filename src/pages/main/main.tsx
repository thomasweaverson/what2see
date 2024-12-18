import Footer from '../../components/footer/footer';

import GenresList from '../../components/genres-list/genres-list';
import { useAppDispatch } from '../../hooks';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/header';
import { resetShowingFilmsStep, setGenre } from '../../store/app-process/app-process';
import FilmsListWithShowMore from '../../components/films-list-with-show-more/films-list-with-show-more';


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
  const location = useLocation();

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

          <GenresList />

          <FilmsListWithShowMore />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Main;
