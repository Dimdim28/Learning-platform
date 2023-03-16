import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/appHooks';
import { useRouter } from 'next/router';

import { fetchLessons } from '@/redux/lessons/asyncActions';

import styles from './lessons-page.module.scss';

const LessonsPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { asPath, isReady } = router;
  useEffect(() => {
    if (isReady) {
      dispatch(fetchLessons({ id: asPath.replace('/course/', '') }));
    }
  }, [asPath, isReady]);

  return <div className={styles.wrapper}>Lessons page</div>;
};

export default LessonsPage;
