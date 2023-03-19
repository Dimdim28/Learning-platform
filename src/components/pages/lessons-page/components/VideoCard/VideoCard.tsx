import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

import styles from './VideoCard.module.scss';
interface VideoCardProps {
  src: string;
  title: string;
  poster: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title, poster }) => {
  const videoRef = useRef(null);

  const setCurrentTime = () => {
    localStorage.setItem(src, videoRef.current.currentTime);
  };
  const getCurrentTime = () => {
    videoRef.current.currentTime = localStorage.getItem(src) || 0;
  };

  useEffect(() => {
    const video = videoRef.current;
    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);
    getCurrentTime();
  }, [videoRef, src]);

  return (
    <div className={styles.wrapper}>
      {src ? (
        <>
          <video
            className={styles.video}
            ref={videoRef}
            poster={poster || '/preview.jpg'}
            muted
            controls={true}
            onTimeUpdate={setCurrentTime}
          />
          <h1 className={styles.title}>{title}</h1>
        </>
      ) : (
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <img className={styles.notFound} src="/404.png" />
        </div>
      )}
    </div>
  );
};

export default VideoCard;
