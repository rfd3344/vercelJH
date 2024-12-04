import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

import { getMasterTree } from 'src/api/githubRepo';

import { GithubFiles } from 'src/types/githubType';

export const fetchMasterTree = createAsyncThunk(
  'githubRepo/fetchMasterTree',
  (repoPath: string) => getMasterTree(repoPath),
);

type GithubRepoState = {
  repoPath: string;
  isValidRepo: boolean;
  masterFiles: GithubFiles[];
};

const initialState: GithubRepoState = {
  repoPath: 'rfd3344/staticJH',
  isValidRepo: false,
  masterFiles: [],
};

const slice = createSlice({
  name: 'githubRepo',
  initialState,
  reducers: {
    updateGithubRepo: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchMasterTree.fulfilled, (state, action) => {
      const { payload = {} } = action;

      state.isValidRepo = true;
      state.masterFiles = payload?.tree || [];
    });
    addCase(fetchMasterTree.rejected, (state, action) => {
      state.isValidRepo = false;
      state.masterFiles = [];
    });
  },
});

export const { updateGithubRepo } = slice.actions;

export default slice.reducer;
