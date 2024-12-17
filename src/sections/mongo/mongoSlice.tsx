import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

type ActionType = '' | 'ADD' | 'UPDATE' | 'DELETE';

const initialState = {
  actionType: '',
  id: '',

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
