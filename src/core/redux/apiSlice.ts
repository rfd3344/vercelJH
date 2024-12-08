
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { publicEnv } from 'src/core/envManager';




const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: publicEnv().VERCEL_SERVER + '/mock/',
  }),

  // endpoints are defined in folder `src/api`
  // ref: https://redux-toolkit.js.org/rtk-query/usage/code-splitting
  endpoints: () => ({}),

});


export default apiSlice
