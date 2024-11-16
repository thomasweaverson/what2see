import { useParams, Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { shuffle } from '../../utils/common-utils';

import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FilmDescription from '../../components/film-description/film-description';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import Footer from '../../components/footer/footer';

import { useAppSelector } from '../../hooks';

function FilmScreen() {
  const films = useAppSelector((state) => state.films);

  const id = useParams().id;
  // eslint-disable-next-line no-console
  console.log(id);

  const movie = films.find((film) => film.id === Number(id));
  if (!movie) {
    return <NotFoundScreen/>;
  }

  const myListIcon = movie.isFavorite ? {viewBox: '0 0 18 14', width: '18', height: '14', xlinkHref: '#in-list' } : {viewBox: '0 0 19 20', width: '19', height: '20', xlinkHref: '#add' };

  const moreLikeThisFilms = shuffle(films.filter((film) => film.name !== movie.name && film.genre === movie.genre).slice(0, 4));

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox={myListIcon.viewBox} width={myListIcon.width} height={myListIcon.height}>
                    <use xlinkHref={myListIcon.xlinkHref}></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`${AppRoute.Films}/${movie.id}${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
            </div>

            <FilmDescription film={movie}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis films={moreLikeThisFilms} />
        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
