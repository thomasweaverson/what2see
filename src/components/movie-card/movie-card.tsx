import { Link } from 'react-router-dom';

import type {Film} from '../../types/film';

type FilmCardProps = Pick<Film, 'id' | 'name' | 'previewImage'> & {onMouseEnter: (id: number) => void; onMouseLeave: () => void};

function FilmCard({id, name, previewImage, onMouseEnter, onMouseLeave}: FilmCardProps): JSX.Element {
  const handleMouseEnter = () => {
    onMouseEnter(id);
  };
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`} >{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
