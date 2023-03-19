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

  useEffect(() => {
    const handleKeyDown = (event: {
      ctrlKey: any;
      key: string;
      preventDefault: () => void;
    }) => {
      const current = videoRef.current;
      if (event.key === '0' && current?.playbackRate) {
        event.preventDefault();
        if (current.playbackRate < 2) current.playbackRate += 0.1;
      } else if (event.key === '9' && current?.playbackRate) {
        event.preventDefault();
        if (current.playbackRate > 0.5) current.playbackRate -= 0.1;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
