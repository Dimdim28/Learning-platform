import { RootState } from '@/redux/store';

export const selectLessons = (state: RootState) => state.lessons.lessons;
export const selectCourseInfo = (state: RootState) => state.lessons.courseInfo;
export const selectStatus = (state: RootState) => state.lessons.status;
export const selectError = (state: RootState) => state.lessons.Error;
