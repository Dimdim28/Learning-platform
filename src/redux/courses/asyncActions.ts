import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '@/services/instance';

import { GetCoursesParams } from './types';
import { Course } from './types';

export const fetchCourses = createAsyncThunk<Course[], GetCoursesParams>(
  'details/getDetails',

  async params => {
    const data = await axiosInstance.get('core/preview-courses', {});
    console.log('data =', data, 'params =', params);
    return data.data;
  },
);
