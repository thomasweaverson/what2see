import { useParams } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import type {Film} from '../../types/film';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-block/user-block';

type AddReviewProps = {
  films: Pick<Film, 'id' | 'name' | 'backgroundImage' | 'posterImage'>[];
}

function AddReview({films}: AddReviewProps): JSX.Element {
  const {id} = useParams();
  const movie = films.find((film) => film.id === Number(id));

  if (!movie) {
    return <NotFoundScreen/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt={movie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{movie.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="#/">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>

  );
}

export default AddReview;
