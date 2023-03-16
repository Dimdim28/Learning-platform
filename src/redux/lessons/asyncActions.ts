import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '@/services/instance';

import { FetchLessonsParams, Lessons } from './types';

export const fetchLessons = createAsyncThunk<Lessons, FetchLessonsParams>(
  'lessons/getLessons',

  async params => {
    const { data, status, statusText } = await axiosInstance.get<Lessons>(
      `core/preview-courses/${params.id}`,
    );
    if (status === 200) return data;
    console.log('data =', data);
    throw new Error(String(statusText));
  },
);
