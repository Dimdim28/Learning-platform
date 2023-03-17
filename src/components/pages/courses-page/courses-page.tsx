import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/appHooks';

import Preloader from '@/components/common/Preloader';
import { fetchCourses } from '@/redux/courses/asyncActions';

import styles from './courses-page.module.scss';

const CoursesPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return <Preloader />;
};

export default CoursesPage;
