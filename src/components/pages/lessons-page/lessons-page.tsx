import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/appHooks';
import { useRouter } from 'next/router';

import Error from '@/components/common/Error';
import Preloader from '@/components/common/Preloader';
import { fetchLessons } from '@/redux/lessons/asyncActions';
import {
  selectCourseInfo,
  selectError,
  selectLessons,
  selectStatus,
} from '@/redux/lessons/selectors';

import LessonCard from './components/LessonCard';
import VideoCard from './components/VideoCard';

import styles from './lessons-page.module.scss';

const LessonsPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const status = useAppSelector(selectStatus);
  const lessons = useAppSelector(selectLessons)
    .slice()
    .sort((a, b) => a.order - b.order);
  const courseInfo = useAppSelector(selectCourseInfo);
  const error = useAppSelector(selectError);
  const [currentVideo, setCurrentVideo] = useState(0);

  const { asPath, isReady } = router;
  useEffect(() => {
    if (isReady) {
      dispatch(fetchLessons({ id: asPath.replace('/course/', '') }));
    }
  }, [asPath, isReady, dispatch]);
  if (status === 'loading') return <Preloader />;
  if (status === 'error') return <Error text={error} />;
  const { link, previewImageLink, order, title } = lessons[currentVideo];
  return (
    <div className={styles.wrapper}>
      <div className={styles.courseInfo}>
        <p
          className={styles.back}
          onClick={() => {
            router.push('/');
          }}
        >
          {'< Back'}
        </p>
        <p>{courseInfo.title}</p>
      </div>
      <div className={styles.courseContent}>
        <div>
          <VideoCard
            src={link || ''}
            poster={previewImageLink + '/lesson-' + order + '.webp'}
            title={title}
          />
          <div className={styles.description}>
            <p> {courseInfo.description}</p>
            <div className={styles.info}>
              <Rating
                className={styles.stars}
                readOnly
                defaultValue={courseInfo.rating}
                precision={0.5}
                size="large"
              />
              <p>{courseInfo.duration} seconds</p>
            </div>
          </div>
        </div>

        <div className={styles.lessons}>
          {lessons.map((lesson, id) => (
            <LessonCard
              {...lesson}
              key={id}
              setCurrentVideo={setCurrentVideo}
              currentVideo={currentVideo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
