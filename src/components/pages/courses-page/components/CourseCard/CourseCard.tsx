import React from 'react';
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
            <p>{lessonsCount} lessons</p>
            <p>Rating: {rating}/5</p>
          </div>

          {tags && (
            <div className={styles.tags}>
              <p>Tags: </p>
              {tags?.map((tag, index) => (
                <p className={styles.tag} key={index}>
                  <i>{tag}</i>
                </p>
              ))}
            </div>
          )}
          {skills && (
            <div className={styles.skills}>
              <p>Skills: </p>
              {skills?.map((skill, index) => (
                <p className={styles.skill} key={index}>
                  <i>{skill}</i>
                </p>
              ))}
            </div>
          )}
          <div className={styles.line}>
            <p>{duration} minutes</p>
            <p>
              {status === 'launched' ? (
                <p>{new Date(launchDate).toLocaleDateString()}</p>
              ) : (
                'Not started yet'
              )}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
