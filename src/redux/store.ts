import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import CoursesReducer from './courses/slice';
import LessonsReducer from './lessons/slice';

export const store = configureStore({
  reducer: {
    courses: CoursesReducer,
    lessons: LessonsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
