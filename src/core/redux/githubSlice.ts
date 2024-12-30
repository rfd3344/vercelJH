
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { publicEnv } from 'src/core/envConfig';


const githubSlice = createApi({
  reducerPath: 'github',
  baseQuery: fetchBaseQuery({ baseUrl: `${publicEnv().GITHUB_API}` }),

  endpoints: () => ({}),
});



export default githubSlice;
