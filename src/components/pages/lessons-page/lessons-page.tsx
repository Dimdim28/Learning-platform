import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/appHooks';
import { useRouter } from 'next/router';

import Preloader from '@/components/common/Preloader';
import { fetchLessons } from '@/redux/lessons/asyncActions';
import { selectStatus } from '@/redux/lessons/selectors';

import styles from './lessons-page.module.scss';

const LessonsPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const status = useAppSelector(selectStatus);

  const { asPath, isReady } = router;
  useEffect(() => {
    if (isReady) {
      dispatch(fetchLessons({ id: asPath.replace('/course/', '') }));
    }
  }, [asPath, isReady, dispatch]);
  if (status === 'loading') return <Preloader />;

  return <div className={styles.wrapper}>Lessons page</div>;
};

export default LessonsPage;
