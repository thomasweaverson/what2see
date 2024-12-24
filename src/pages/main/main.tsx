import Footer from '../../components/footer/footer';

import GenresList from '../../components/genres-list/genres-list';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { resetShowingFilmsStep, setGenre } from '../../store/app-process/app-process';
import FilmsListWithShowMore from '../../components/films-list-with-show-more/films-list-with-show-more';
import { getIsPromoFilmLoadingStatus, getPromoFilm } from '../../store/app-data/selectors';
import Loader from '../../components/loader/loader';
import { AppRoute } from '../../const';
import MyListButton from '../../components/my-list-button/my-list-button';


function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();


  const promoFilm = useAppSelector(getPromoFilm);
  const isPromoFilmLoading = useAppSelector(getIsPromoFilmLoadingStatus);


  const handlePlayButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!promoFilm) {
      return;
    }
    navigate(`${AppRoute.Player}/${promoFilm.id }`);
  };

  useEffect(() => {
    dispatch(resetShowingFilmsStep());
    dispatch(setGenre('All genres'));
  }, [dispatch, location.pathname]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />
        {isPromoFilmLoading && <Loader />}
        {promoFilm &&
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={handlePlayButtonClick} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton filmId={promoFilm.id} isFavorite={promoFilm.isFavorite} />
              </div>
            </div>
          </div>
        </div>}
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
