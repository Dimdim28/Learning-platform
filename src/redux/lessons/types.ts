import { Course, Status } from '../types';

export type Lesson = {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  status: string;
  link: string;
  previewImageLink: string;
  meta: null;
};

export type Lessons = Course & { lessons: Lesson[] };

export interface LessonsSliceState {
  status: Status;
  lessons: Lesson[];
  courseInfo: Course | null;
  Error?: string;
}

export interface FetchLessonsParams {
  id: string;
}
