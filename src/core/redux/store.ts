'use client';
import { configureStore } from '@reduxjs/toolkit';

import githubRepo from 'src/sections/githubRepo/githubRepoSlice';
import markdown from 'src/sections/markdown/markdownSlice';
import webpage from 'src/sections/webpage/webpageSlice';
import mongo from 'src/sections/mongo/mongoSlice';

import core from './coreSlice';
import apiSlice from './apiSlice';

export const makeStore = () => configureStore({
  reducer: {
    core,
    githubRepo,
    markdown,
    webpage,
    mongo,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      // .prepend(listenerMiddleware.middleware)
      .concat(apiSlice.middleware),
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
