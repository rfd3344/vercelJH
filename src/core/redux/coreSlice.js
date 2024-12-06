import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';


const initialState = {
  snackBar: {},
};
const slice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    // updateNavTitle: (state, action) => {
    //   const title = action.payload;
    //   state.navTitle = title;
    // },
  },
  extraReducers: ({ addCase }) => { },
});

export const {
  // updateNavTitle,
} = slice.actions;

export default slice.reducer;
