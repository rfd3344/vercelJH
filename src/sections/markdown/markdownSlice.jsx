import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  selectFile: '',
  filePaths: [],
};

const slice = createSlice({
  name: 'markdownSlice',
  initialState,
  reducers: {
    updateMarkdown: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  extraReducers: ({ addCase }) => {},
});

export const { updateMarkdown } = slice.actions;

export default slice.reducer;
