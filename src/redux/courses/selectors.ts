import { RootState } from '@/redux/store';

export const selectCourses = (state: RootState) => state.courses.courses;
export const selectStatus = (state: RootState) => state.courses.status;
export const selectError = (state: RootState) => state.courses.Error;
export const selectCurrentPage = (state: RootState) =>
  state.courses.currentPage;
