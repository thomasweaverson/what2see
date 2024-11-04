import { useRef, useState, useEffect } from 'react';
import VideoPlayer from '../video-player/video-player';

function TestVideoContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Функция для остановки видео и возврата к началу
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Возвращаем видео к началу
      videoRef.current.load();
    }
  };

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(() => {
        // eslint-disable-next-line no-console
        console.log('Video mazafaka');
      });
    }
  }, [isHovered]);

  return (
    <div
      className="test"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '280px',
        height: '175px',
      }}
    >
      {isHovered &&
        <VideoPlayer
          ref={videoRef} // Передаем ссылку в видеоплеер
          previewVideoLink="https://10.react.htmlacademy.pro/static/film/video/traffic.mp4"
          previewImage="https://10.react.htmlacademy.pro/static/film/preview/A_Star_Is_Born.jpg"
        />}
      {!isHovered && <img src="https://10.react.htmlacademy.pro/static/film/preview/A_Star_Is_Born.jpg" alt="preview" />}
    </div>
  );
}

export default TestVideoContainer;
