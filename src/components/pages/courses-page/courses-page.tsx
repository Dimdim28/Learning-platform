import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/appHooks';

import Preloader from '@/components/common/Preloader';
import { fetchCourses } from '@/redux/courses/asyncActions';
import { selectStatus } from '@/redux/courses/selectors';

import styles from './courses-page.module.scss';

const CoursesPage = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (status === 'loading') return <Preloader />;
  return <div className={styles.wrapper}>Courses page</div>;
};

export default CoursesPage;
