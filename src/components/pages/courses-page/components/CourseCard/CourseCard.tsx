import React from 'react';
import { Rating } from '@mui/material';
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
  video?: string;
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
  video,
}) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} href={`course/${id}`}>
        <img src={`${image}/cover.webp`} className={styles.courseImg} />
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
