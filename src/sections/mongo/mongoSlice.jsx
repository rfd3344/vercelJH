import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  size: 30,
  alignment: 'center',
  webUrl: 'https://www.bilibili.com/index.html',
};

const slice = createSlice({
  name: 'mongo',
  initialState,
  reducers: {
    updateMongo: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const { updateMongo } = slice.actions;

export default slice.reducer;
