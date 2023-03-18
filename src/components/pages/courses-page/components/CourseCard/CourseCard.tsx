import React, { useRef, useState } from 'react';
import { Rating } from '@mui/material';
import Hls from 'hls.js';
import Link from 'next/link';

import styles from './CourseCard.module.scss';

interface CourseCardProps {
  id: string;
  tags: string[];
  title: string;
  description: string;
  image: string;
  lessonsCount: number;
  skills?: string[];
  rating: number;
  duration: number;
  launchDate?: string;
  status: string;
  videoLink?: string;
  videoDuration: number;
  videoPreviewImage: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  tags,
  title,
  description,
  image,
  lessonsCount,
  skills,
  rating,
  duration,
  launchDate,
  status,
  videoLink,
  videoDuration,
  videoPreviewImage,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const mouseEnterHandler = () => {
    const video = videoRef.current;
    setIsPlaying(true);
    if (video && videoPreviewImage) {
      const hls = new Hls();
      hls.loadSource(videoLink);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    }
  };

  const mouseLeaveHandler = () => {
    setIsPlaying(false);
    const video = videoRef.current;
    if (video) video.pause();
  };
  return (
    <div
      className={styles.wrapper}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Link className={styles.link} href={`course/${id}`}>
        {!isPlaying && (
          <img src={`${image}/cover.webp`} className={styles.img} />
        )}
        <video
          className={isPlaying ? styles.video : styles.videoDisabled}
          ref={videoRef}
          poster={videoPreviewImage + '/cover.webp'}
          muted
        />

        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.line}>
            <p className={styles.lessons}>{lessonsCount} lessons</p>
            <Rating
              className={styles.stars}
              readOnly
              defaultValue={rating}
              precision={0.5}
            />
            {tags.length === 1 && <p className={styles.tag}>{tags[0]}</p>}
          </div>

          {tags?.length > 1 && (
            <div className={styles.tags}>
              {tags?.map((tag, index) => (
                <p className={styles.tag} key={index}>
                  {tag}
                </p>
              ))}
            </div>
          )}

          <div className={styles.skills}>
            {skills ? skills.join(', ') : 'No skills mentioned'}
          </div>

          <div className={styles.line}>
            <p>{duration} minutes</p>
            <p>
              {status === 'launched'
                ? `${new Date(launchDate).toLocaleDateString()}`
                : 'Not started yet'}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
