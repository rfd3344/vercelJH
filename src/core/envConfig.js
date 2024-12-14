import _ from 'lodash';

/***
 * export all client variables
 */
export const publicEnv = () => ({
  STAGE: process.env.NEXT_PUBLIC_STAGE || '',
  BUILD_TIME: process.env.NEXT_PUBLIC_BUILD_TIME || '',
  GITHUB_API: process.env.NEXT_PUBLIC_GITHUB_API || '',
  GITHUB_RAW: process.env.NEXT_PUBLIC_GITHUB_RAW || '',
  VERCEL_SERVER: process.env.NEXT_PUBLIC_VERCEL_SERVER || '',

  SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
});

/***
 * export all server variables
 */
export const serverEnv = () => ({
  MONGO_USERNAME: process.env.MONGO_USERNAME || '',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || '',
  MONGO_DATABASE: process.env.MONGO_DATABASE || '',
});
