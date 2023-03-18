import React from 'react';

import styles from './LessonCard.module.scss';

interface lessonCardprops {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  link: string;
  status: string;
  previewImageLink: string;
  meta: {
    difficulty: string;
  };
  setCurrentVideo: React.Dispatch<React.SetStateAction<number>>;
  currentVideo: number;
}

const LessonCard: React.FC<lessonCardprops> = ({
  id,
  title,
  duration,
  order,
  type,
  status,
  previewImageLink,
  link,
  meta,
  setCurrentVideo,
  currentVideo,
}) => {
  return (
    <div
      className={
        status === 'locked' || !link
          ? styles.locked
          : order === currentVideo + 1
          ? styles.active
          : styles.wrapper
      }
      onClick={() => {
        setCurrentVideo(order - 1);
      }}
    >
      <img
        className={styles.image}
        src={`${previewImageLink}/lesson-${order}.webp`}
        alt={title}
      />
      <p>{title}</p>
    </div>
  );
};

export default LessonCard;
