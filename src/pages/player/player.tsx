import { useParams } from 'react-router-dom';

import type {Film} from '../../types/film';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type PlayerProps = {
  films: Pick<Film, 'id' | 'videoLink' | 'posterImage'>[];
};

function Player ({films}: PlayerProps) {
  const id = useParams().id;
  // eslint-disable-next-line no-console
  console.log(id);
  const movie = films.find((film) => film.id === Number(id));

  if (!movie) {
    return <NotFoundScreen/>;
  }
  return (
    <div className="player">
      <video src={movie.videoLink} className="player__video" poster={movie.posterImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%;'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
