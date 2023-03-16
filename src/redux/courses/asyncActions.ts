import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import axiosInstance from '@/services/instance';

import { Course } from '../types';

export const fetchCourses = createAsyncThunk<Course[]>(
  'courses/getCourses',

  async () => {
    try {
      const { data } = await axiosInstance.get<Course[]>(
        'core/preview-courses',
      );
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.response.data.message);
      } else {
        throw e;
      }
    }
  },
);
