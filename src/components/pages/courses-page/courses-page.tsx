import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/appHooks';

import Preloader from '@/components/common/Preloader';
import { fetchCourses } from '@/redux/courses/asyncActions';
import {
  selectCourses,
  selectError,
  selectStatus,
} from '@/redux/courses/selectors';

import CourseCard from './components/CourseCard';
import Pagination from './components/Pagination';

import styles from './courses-page.module.scss';

const CoursesPage = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const courses = useAppSelector(selectCourses);

  const error = useAppSelector(selectError);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  if (status === 'loading') return <Preloader />;
  if (status === 'error') return <div>{error}</div>;
  console.log(courses);
  const sortedCourses = courses
    .slice(10 * (currentPage - 1), 10 * currentPage)
    .sort(
      (a, b) =>
        new Date(b.launchDate).valueOf() - new Date(a.launchDate).valueOf(),
    );
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {sortedCourses.map(
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
      <Pagination
        currentPage={currentPage}
        setPage={setCurrentPage}
        totalPages={Math.ceil(courses.length / 10)}
      />
    </div>
  );
};

export default CoursesPage;
