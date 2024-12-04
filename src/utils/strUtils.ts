import _ from 'lodash';

/***********************************************
 * limit message to 500 characters
 * @param {String} str - str to limit
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
    return;
  }
};
