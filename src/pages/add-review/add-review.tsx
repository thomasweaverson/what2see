import NotFoundScreen from '../not-found-screen/not-found-screen';
import ReviewForm from '../../components/review-form/review-form';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { getCurrentFilm } from '../../store/app-data/selectors';

function AddReview(): JSX.Element {

  const currentFilm = useAppSelector(getCurrentFilm);

  if (!currentFilm) {
    return <NotFoundScreen/>;
  }
  // eslint-disable-next-line
  console.log('AddReview рендерится');
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.posterImage} alt={currentFilm.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>

  );
}

export default AddReview;
