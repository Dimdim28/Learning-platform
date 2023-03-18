import React, { useRef } from 'react';
import Hls from 'hls.js';

import styles from './VideoCard.module.scss';
interface VideoCardProps {
  src: string;
  title: string;
  poster: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const video = videoRef.current;

  if (video && poster) {
    const hls = new Hls();

    if (!src)
      return (
        <div className={styles.wrapper}>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <img className={styles.notFound} src="/404.png" />
          </div>
        </div>
      );
    hls.loadSource(src || '');
    hls.attachMedia(video);
  }

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        ref={videoRef}
        poster={poster}
        muted
        controls={true}
      />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default VideoCard;
