
import { configureStore } from '@reduxjs/toolkit';

import githubRepo from 'src/sections/githubRepo/githubRepoSlice';
import markdown from 'src/sections/markdown/markdownSlice';
import webpage from 'src/sections/webpage/webpageSlice';
import mongo from 'src/sections/mongo/mongoSlice';

import core from './coreSlice';
import apiSlice from './apiSlice';
import expressSlice from './expressSlice';

export const store = configureStore({
  reducer: {
    githubRepo,
    markdown,
    webpage,
    mongo,

    core,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [expressSlice.reducerPath]: expressSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      // .prepend(listenerMiddleware.middleware)
      .concat(apiSlice.middleware)
      .concat(expressSlice.middleware),
});

// Infer the type of makeStore
// export type AppStore = ReturnType<typeof store.getState>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
