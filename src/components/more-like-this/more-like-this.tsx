import type {Film} from '../../types/film';
import {useState} from 'react';

import FilmCard from '../film-card/film-card';

type MoreLikeThisProps = {
  films: Pick<Film, 'name' | 'id' | 'previewImage' | 'previewVideoLink'>[];
}

function MoreLikeThis({films}: MoreLikeThisProps) {
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
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {films.map((film) => (
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
    </section>
  );
}

export default MoreLikeThis;
