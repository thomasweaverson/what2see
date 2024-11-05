import { forwardRef } from 'react';

type VideoPlayerProps = {
  previewImage: string;
  previewVideoLink: string;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(({previewImage, previewVideoLink}, ref) =>
  (
    <video
      ref={ref}
      src={previewVideoLink}
      poster={previewImage}
      muted
      loop
      preload="auto"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      crossOrigin='anonymous'
    />)
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
