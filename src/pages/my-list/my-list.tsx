import Logo from '../../components/logo/logo';
import MovieCard from '../../components/movie-card/movie-card';
import Footer from '../../components/footer/footer';

function MyList () {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="/">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {Array.from({ length: 9 }).map((_) => <MovieCard key={Math.random()} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
