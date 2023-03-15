import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/appHooks';

import { fetchCourses } from '@/redux/courses/asyncActions';

import styles from './courses-page.module.scss';

const CoursesPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCourses({ id: 'l' }));
  }, []);

  return <div className={styles.wrapper}>Courses page</div>;
};

export default CoursesPage;
