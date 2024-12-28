
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { publicEnv } from 'src/core/envConfig';

const expressSlice = createApi({
  reducerPath: 'expressApi',
  tagTypes: [],
  baseQuery: fetchBaseQuery({ baseUrl: `${publicEnv().EXPRESS_SERVER}` }),

  // endpoints are defined in folder `src/query`
  // ref: https://redux-toolkit.js.org/rtk-query/usage/code-splitting
  endpoints: () => ({}),

});



export default expressSlice;
