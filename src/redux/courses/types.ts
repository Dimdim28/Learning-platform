import { Course, Status } from '../types';

export interface CoursesSliceState {
  status: Status;
  courses: Course[];
  Error?: string;
}
