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
  videoLink: string;
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
  //videoPreviewImage,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const mouseEnterHandler = () => {
    const video = videoRef.current;
    setIsPlaying(true);
    if (video) {
      const hls = new Hls();
      hls.on(Hls.Events.ERROR, function (event, data) {
        const errorFatal = data.fatal;
        if (errorFatal) {
          setIsErrorOccured(true);
        }
      });
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
          <img
            src={`${image}/cover.webp`}
            className={styles.img}
            alt={'image'}
          />
        )}
        {isErrorOccured ? (
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <img
              className={isPlaying ? styles.notFound : styles.videoDisabled}
              src="./404.png"
              alt="errorImage"
            />
          </div>
        ) : (
          <video
            role={'video'}
            className={isPlaying ? styles.video : styles.videoDisabled}
            ref={videoRef}
            // poster={
            //   videoPreviewImage
            //     ? videoPreviewImage + '/cover.webp'  removed because images not found
            //     : '/preview.jpg'
            // }
            muted
          />
        )}

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
            <div className={styles.tags} role={'tagsContainer'}>
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
            <p>{duration} seconds</p>
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
