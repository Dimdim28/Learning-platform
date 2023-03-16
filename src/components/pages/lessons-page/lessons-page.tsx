import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/appHooks';

import { fetchLessons } from '@/redux/lessons/asyncActions';

import styles from './lessons-page.module.scss';

const LessonsPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchLessons({ id: '352be3c6-848b-4c19-9e7d-54fe68fef183' }));
  }, []);

  return <div className={styles.wrapper}>Lessons page</div>;
};

export default LessonsPage;
