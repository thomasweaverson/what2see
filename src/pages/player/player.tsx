import { useNavigate, useParams } from 'react-router-dom';

import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useAppSelector } from '../../hooks';
import { useEffect, useRef, useState } from 'react';
import store from '../../store';
import { fetchFilm } from '../../store/action';
import { getCurrentFilm, getIsCurrentFilmLoadingStatus } from '../../store/app-data/selectors';
import { resetCurrentFilm } from '../../store/app-data/app-data';
import { AppRoute } from '../../const';
import Loader from '../../components/loader/loader';

const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  return hours > 0
    ? `-${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `-${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

function Player () {
  const navigate = useNavigate();

  const videoRef = useRef<HTMLVideoElement>(null);
  const video = videoRef.current;
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState('');

  const id = Number(useParams().id);
  const film = useAppSelector(getCurrentFilm);
  const isFilmLoadingStatus = useAppSelector(getIsCurrentFilmLoadingStatus);

  useEffect(() => {
    store.dispatch(fetchFilm(id));
    return () => {
      store.dispatch(resetCurrentFilm());
    };
  }, [id]);

  useEffect(() => {

    // eslint-disable-next-line
    console.log(video);
    if (!video) {
      return;
    }

    const updateProgress = () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
      setProgress((currentTime / duration) * 100);
      setTimeLeft(formatTime(duration - currentTime));
    };

    video.addEventListener('timeupdate', updateProgress);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, [video]);

  const handlePlayPause = () => {
    if (!video) {
      return;
    }
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };


  const handleFullScreen = () => {
    // eslint-disable-next-line
    console.log(video);

    if (!video) {
      return;
    }
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ('webkitRequestFullscreen' in video) {
      (video as HTMLVideoElement & { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
    } else if ('mozRequestFullScreen' in video) {
      (video as HTMLVideoElement & { mozRequestFullScreen: () => void }).mozRequestFullScreen();
    } else if ('msRequestFullscreen' in video) {
      (video as HTMLVideoElement & { msRequestFullscreen: () => void }).msRequestFullscreen();
    }
  };

  const handleExit = () => {
    navigate(`${AppRoute.Films}/${id}`);
  };

  if (!film) {
    if (!isFilmLoadingStatus) {
      return <NotFoundScreen />;
    }
    return <Loader />;
  }

  return (
    <div className="player">
      <video ref={videoRef} src={film.videoLink} className="player__video" poster={film.backgroundImage}></video>

      <button type="button" className="player__exit" onClick={handleExit}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={handlePlayPause} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
            </svg>
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button onClick={handleFullScreen} type="button" className="player__full-screen">
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
