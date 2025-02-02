import { useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/app-data/selectors';
import type {Film} from '../../types/types';
import FilmsList from '../films-list/films-list';

type MoreLikeThisProps = {
  films: Film[];
}

function MoreLikeThis({films}: MoreLikeThisProps) {
  const currentFilm = useAppSelector(getCurrentFilm);
  const filteredFilms = currentFilm !== null ? films.filter((film) => film.name !== currentFilm.name) : films;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={filteredFilms} />
    </section>
  );
}

export default MoreLikeThis;
