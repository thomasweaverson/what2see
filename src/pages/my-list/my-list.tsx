import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';

import FilmsList from '../../components/films-list/films-list';


import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';

function MyList (): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const favoriteFilms = films.filter((film) => film.isFavorite).map((film) => ({id: film.id, name: film.name, previewImage: film.previewImage, previewVideoLink: film.previewVideoLink}));
  const isNoFilms = favoriteFilms.length === 0;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {isNoFilms &&
        <>
          <h2 className="catalog__title">No films in your list</h2>
          <div className="my-list__empty">
            <p className="catalog__message">No films yet</p>
            <p className="catalog__message">You can add some movies to your list at the <Link className="small-film-card__link" to="/">Main page</Link></p>
          </div>
        </>}
        <FilmsList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
