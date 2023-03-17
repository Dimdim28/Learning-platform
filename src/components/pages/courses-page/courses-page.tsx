import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/appHooks';

import Preloader from '@/components/common/Preloader';
import { fetchCourses } from '@/redux/courses/asyncActions';
import {
  selectCourses,
  selectError,
  selectStatus,
} from '@/redux/courses/selectors';

import CourseCard from './components/CourseCard';

import styles from './courses-page.module.scss';

const CoursesPage = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const courses = useAppSelector(selectCourses);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (status === 'loading') return <Preloader />;
  if (status === 'error') return <div>{error}</div>;
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {courses.map(
          ({
            id,
            title,
            tags,
            launchDate,
            status,
            description,
            duration,
            lessonsCount,
            previewImageLink,
            rating,
            meta,
          }) => (
            <CourseCard
              key={id}
              id={id}
              title={title}
              description={description}
              image={previewImageLink}
              lessonsCount={lessonsCount}
              skills={meta.skills}
              rating={rating}
              video={meta.courseVideoPreview?.link}
              tags={tags}
              duration={duration}
              launchDate={launchDate}
              status={status}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
