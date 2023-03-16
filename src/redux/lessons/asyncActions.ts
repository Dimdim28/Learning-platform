import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import axiosInstance from '@/services/instance';

import { FetchLessonsParams, Lessons } from './types';

export const fetchLessons = createAsyncThunk<Lessons, FetchLessonsParams>(
  'lessons/getLessons',

  async params => {
    try {
      const { data } = await axiosInstance.get<Lessons>(
        `core/preview-courses/${params.id}`,
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
