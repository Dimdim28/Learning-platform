import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../types';

import { fetchCourses } from './asyncActions';
import { CoursesSliceState } from './types';

const initialState: CoursesSliceState = {
  status: Status.LOADING,
  courses: [],
  currentPage: 1,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCourses.pending, state => {
      delete state.Error;
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

export const { setCurrentPage } = coursesSlice.actions;

export default coursesSlice.reducer;
