import { Film } from '../../types/types';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Film[];
}
function FilmsList({films}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        (
          <FilmCard
            key={film.id}
            id={film.id}
            name={film.name}
            previewImage={film.previewImage}
            previewVideoLink={film.previewVideoLink}
          />
        ))}
    </div>
  );
}

export default FilmsList;
