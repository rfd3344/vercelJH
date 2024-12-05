import _ from 'lodash';


export const plural = (str = '', count = 1, pluralStr = '') => {
  if (count === 1) return str;
  return pluralStr ? pluralStr : `${str}s`;
};

/***********************************************
 * limit message to 500 characters
 * @param str - str to limit
 * @param limitSize - Default: 500
 *
 *
 */
export const trimString = (str = '', limitSize = 500) => {
  if (!_.isString(str)) return '';

  if (str.length > limitSize) return `${str.substring(0, limitSize - 3)}...`;

  return str;
};

export const parseJSON = (str = '') => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
};
