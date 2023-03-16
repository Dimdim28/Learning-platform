import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '@/services/instance';

import { Course } from '../types';

export const fetchCourses = createAsyncThunk<Course[]>(
  'courses/getCourses',

  async () => {
    const { data, status, statusText } = await axiosInstance.get<Course[]>(
      'core/preview-courses',
    );
    if (status === 200) return data;
    console.log('data =', data);
    throw new Error(String(statusText));
  },
);
