import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import axiosInstance from '@/services/instance';

import { Course } from '../types';

import { FetchCourseResponse } from './types';

export const fetchCourses = createAsyncThunk<Course[]>(
  'courses/getCourses',

  async () => {
    try {
      const { data } = await axiosInstance.get<FetchCourseResponse>(
        'core/preview-courses',
      );
      return data.courses;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.response.data.message);
      } else {
        throw e;
      }
    }
  },
);
