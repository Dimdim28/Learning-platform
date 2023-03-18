import { Course, Status } from '../types';

export interface CoursesSliceState {
  status: Status;
  courses: Course[];
  Error?: string;
  currentPage: number;
}

export interface FetchCourseResponse {
  courses: Course[];
}
