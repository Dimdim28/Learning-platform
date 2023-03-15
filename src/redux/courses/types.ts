import { Status } from '../types';
export type Course = {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: true;
  previewImageLink: string;
  rating: number;
  meta: {
    slug: string;
    skills: string[];
    courseVideoPreview: {
      link: string;
      duration: number;
      previewImageLink: string;
    };
  };
};

export interface CoursesSliceState {
  status: Status;
  courses: Course[];
  Error?: string;
}

export interface GetCoursesParams {
  id: string;
}
