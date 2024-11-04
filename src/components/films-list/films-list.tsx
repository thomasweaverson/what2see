import { useState } from 'react';
import type {Film} from '../../types/film';

import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Pick<Film, 'id' | 'name' | 'previewImage' | 'previewVideoLink'>[];
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
              previewVideoLink={film.previewVideoLink}
              // isPlaying={activeCard === film.id}
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
