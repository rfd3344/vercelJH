import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  size: 30,
  alignment: 'center',
  webUrl: 'https://www.bilibili.com/index.html',
};

const slice = createSlice({
  name: 'webpage',
  initialState,
  reducers: {
    updateWebpage: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const { updateWebpage } = slice.actions;

export default slice.reducer;
