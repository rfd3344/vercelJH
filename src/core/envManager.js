import _ from 'lodash';

/***
 * export all client variables
 *
 */
export const envManager = () => ({
  STAGE: process.env.NEXT_PUBLIC_STAGE,
  BUILD_TIME: process.env.NEXT_PUBLIC_BUILD_TIME,
  GITHUB_API: process.env.NEXT_PUBLIC_GITHUB_API,
  GITHUB_RAW: process.env.NEXT_PUBLIC_GITHUB_RAW,
});
