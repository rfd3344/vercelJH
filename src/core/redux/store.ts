
import { configureStore } from '@reduxjs/toolkit';

// import githubRepo from '@/sections/githubRepo/githubRepoSlice';
// import markdown from '@/sections/markdown/markdownSlice';
// import webpage from '@/sections/webpage/webpageSlice';

import core from './coreSlice';
// import apiSlice from './apiSlice';
// import githubSlice from './githubSlice';
// import expressSlice from './expressSlice';

export const store = configureStore({
  reducer: {
    // githubRepo,
    // markdown,
    // webpage,

    core,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    // [githubSlice.reducerPath]: githubSlice.reducer,
    // [expressSlice.reducerPath]: expressSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      // .prepend(listenerMiddleware.middleware)
      // .concat(apiSlice.middleware)
      // .concat(githubSlice.middleware)
      // .concat(expressSlice.middleware),
});

// Infer the type of makeStore
// export type AppStore = ReturnType<typeof store.getState>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
