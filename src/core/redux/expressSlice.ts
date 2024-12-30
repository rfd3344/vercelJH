
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { publicEnv } from 'src/core/envConfig';

const expressSlice = createApi({
  reducerPath: 'expressApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${publicEnv().EXPRESS_SERVER}` }),
  endpoints: () => ({}),
});



export default expressSlice;
