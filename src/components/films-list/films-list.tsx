import { useState } from 'react';
import type {Film} from '../../types/film';

import FilmCard from '../movie-card/movie-card';

type FilmsListProps = {
  films: Pick<Film, 'id' | 'name' | 'previewImage'>[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  // eslint-disable-next-line no-console
  console.log(activeCard);

  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };
  return (
    <>
      <div className="catalog__films-list">
        {films.map((film) =>
          (
            <FilmCard
              key={film.id}
              id={film.id}
              name={film.name}
              previewImage={film.previewImage}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
}

export default FilmsList;
