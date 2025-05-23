import _ from 'lodash';

/***
 * export all client variables
 */
export const publicEnv = () => ({
  STAGE: process.env.NEXT_PUBLIC_STAGE || '',
  BUILD_TIME: process.env.NEXT_PUBLIC_BUILD_TIME || '',
  GITHUB_API: process.env.NEXT_PUBLIC_GITHUB_API || '',
  GITHUB_RAW: process.env.NEXT_PUBLIC_GITHUB_RAW || '',

  EXPRESS_SERVER: process.env.NEXT_PUBLIC_EXPRESS_SERVER || '',
  VERCEL_SERVER: process.env.NEXT_PUBLIC_VERCEL_SERVER || '',


  MONGO_USERNAME: process.env.NEXT_PUBLIC_MONGO_USERNAME || '',
  MONGO_PASSWORD: process.env.NEXT_PUBLIC_MONGO_PASSWORD || '',
  MONGO_DATABASE: process.env.NEXT_PUBLIC_MONGO_DATABASE || '',

});

/***
 * export all server variables
 */
export const serverEnv = () => ({
  PERCY_TOKEN: process.env.PERCY_TOKEN || '',
});
