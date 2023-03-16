import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../types';

import { fetchLessons } from './asyncActions';
import { LessonsSliceState } from './types';

const initialState: LessonsSliceState = {
  status: Status.LOADING,
  lessons: [],
  courseInfo: null,
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLessons.pending, state => {
      delete state.Error;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchLessons.fulfilled, (state, action) => {
      const { lessons, ...courseInfo } = action.payload;
      state.lessons = lessons;
      state.courseInfo = courseInfo;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchLessons.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.Error = action.error.message;
    });
  },
});

export default lessonsSlice.reducer;
