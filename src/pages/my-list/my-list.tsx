import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';

import FilmsList from '../../components/films-list/films-list';

import type {Film} from '../../types/film';
import UserBlock from '../../components/user-block/user-block';

type FilmsListProps = {
  films: Pick<Film, 'id' | 'name' | 'previewImage' | 'previewVideoLink'>[];
}

function MyList ({films}: FilmsListProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
