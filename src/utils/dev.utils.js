import _ from 'lodash';

import packageJson from 'src/../package.json';


/*********************************************************************************************
 * method to check current environment is development or not
 *
 */
export const isDev = () => process.env.NODE_ENV === 'development';

/*********************************************************************************************
 *
 *
 */
export const getBuildInfo = () => {
  const stage = process.env.NEXT_PUBLIC_STAGE;
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME;

  return `stage: ${stage}, version: ${packageJson.version}, buildTime: ${buildTime}`;
};

/*********************************************************************************************
 * only added in development environment
 *
 */
export const addDevFunctions = () => {
  _.mixin({
    log: isDev() ? console.log : () => { },
    warn: isDev() ? console.warn : () => { },
    error: console.error,
  });

  const style = 'color:DodgerBlue; font-size: 14px; font-weight: bold;';
  console.log(`%c${getBuildInfo()}`, style);
};
