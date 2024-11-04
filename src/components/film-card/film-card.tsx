import { memo } from 'react';
import { Link } from 'react-router-dom';
// import VideoPlayer from '../video-player/video-player';
import type {Film} from '../../types/film';

type FilmCardProps = Pick<Film, 'id' | 'name' | 'previewImage' | 'previewVideoLink'> & {
  // isPlaying: boolean;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
};

function FilmCard({id, name, previewImage, previewVideoLink, onMouseEnter, onMouseLeave}: FilmCardProps): JSX.Element {
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

export default memo(FilmCard);
