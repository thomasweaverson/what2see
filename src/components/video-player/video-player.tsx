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
      width="280"
      height="175"
      preload="auto"
    />)
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
