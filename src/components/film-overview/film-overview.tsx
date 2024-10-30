import type { Film } from '../../types/film';

import { splitDescription } from '../../utils/common-utils';
import { formatStarringArrayToString, getRatingDescription } from '../../utils/film-utils';

type FilmOverviewProps = Pick<Film, 'rating' | 'scoresCount' | 'description' | 'director' | 'starring'>;


function FilmOverview({rating, scoresCount, description, director, starring}: FilmOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {splitDescription(description).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {formatStarringArrayToString(starring)}</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
