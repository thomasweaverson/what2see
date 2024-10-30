import { useParams, Link} from 'react-router-dom';
import { useState } from 'react';

import Logo from '../../components/logo/logo';
import FilmDetails from '../../components/film-details/film-details';
import Footer from '../../components/footer/footer';

import type {Film} from '../../types/film';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import { shuffle } from '../../utils/common-utils';
import FilmScreenTabs from '../../components/film-screen-tabs/film-screen-tabs';
import FilmOverview from '../../components/film-overview/film-overview';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute } from '../../const';

function FilmScreen({films}: {films: Film[]}) {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const id = useParams().id;
  // eslint-disable-next-line no-console
  console.log(id);

  const movie = films.find((film) => film.id === Number(id));

  if (!movie) {
    return <NotFoundScreen/>;
  }

  const myListIcon = movie.isFavorite ? {viewBox: '0 0 18 14', width: '18', height: '14', xlinkHref: '#in-list' } : {viewBox: '0 0 19 20', width: '19', height: '20', xlinkHref: '#add' };


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
                {/* <Link /> ^ */}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmScreenTabs id={movie.id} activeTab={activeTab} setActiveTab={setActiveTab}/>

              {activeTab === 'details' ?
                <FilmDetails
                  director={movie.director}
                  starring={movie.starring}
                  genre={movie.genre}
                  released={movie.released}
                  runTime={movie.runTime}
                /> :
                <FilmOverview
                  rating={movie.rating}
                  scoresCount={movie.scoresCount}
                  description={movie.description}
                  director={movie.director}
                  starring={movie.starring}
                />}

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis films={shuffle(films.filter((film) => film.name !== movie.name)).slice(0, 4)} />
        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
