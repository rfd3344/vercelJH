
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { publicEnv } from 'src/core/envManager';




export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: publicEnv().VERCEL_SERVER + '/mock/'

  }),
  endpoints: builder => ({

    getUserList: builder.query<any, void>({
      query: () => '/user/index.json',
    }),

    getUserById: builder.query({
      query: (id) => `/user/${id}.json`,

    }),
  }),
});


export const {
  useGetUserListQuery,
  useGetUserByIdQuery,



} = apiSlice;
