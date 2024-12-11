import type { Action, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { publicEnv } from 'src/core/envManager';
import { HYDRATE } from 'next-redux-wrapper';

type RootState = any // normally inferred from state



function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}


const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${publicEnv().VERCEL_SERVER}/mock/`,
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  // endpoints are defined in folder `src/api`
  // ref: https://redux-toolkit.js.org/rtk-query/usage/code-splitting
  endpoints: () => ({}),

});


export default apiSlice;
