import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import type {Film} from '../../types/types';

type FilmCardProps = Pick<Film, 'id' | 'name' | 'previewImage' | 'previewVideoLink'> & {
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
};

function FilmCard({id, name, previewImage, previewVideoLink, onMouseEnter, onMouseLeave}: FilmCardProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    onMouseEnter?.(id);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    onMouseLeave?.();
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (isHovered && videoRef.current) {
      timeoutId = setTimeout(() => {
        videoRef.current?.play();
      }, 1000);
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

  }, [isHovered]);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image" style={{ borderRadius: '6px', overflow: 'hidden', width: '280px', height: '175px' }}>
        {isHovered &&
        <VideoPlayer
          ref={videoRef}
          previewVideoLink={previewVideoLink}
          previewImage={previewImage}
        />}
        {!isHovered && <img src={previewImage} alt={name} />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`} >{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
