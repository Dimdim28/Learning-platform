import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../types';

import { fetchCourses } from './asyncActions';
import { CoursesSliceState } from './types';

const initialState: CoursesSliceState = {
  status: Status.LOADING,
  courses: [],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCourses.pending, state => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.Error = action.error.message;
    });
  },
});

export default coursesSlice.reducer;
