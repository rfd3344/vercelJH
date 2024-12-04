'use client';
import { configureStore } from '@reduxjs/toolkit';

import core from './coreSlice';
import githubRepo from 'src/sections/githubRepo/githubRepoSlice';
import markdown from 'src/sections/markdown/markdownSlice';
import webpage from 'src/sections/webpage/webpageSlice';

export const makeStore = () => configureStore({
  reducer: {
    core,
    githubRepo,
    markdown,
    webpage,
  },
});
// export const store = configureStore({
//   reducer: {
//     core,
//     githubRepo,
//     markdown,
//     webpage,
//   },
// });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
