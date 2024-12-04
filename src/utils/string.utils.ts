import _ from 'lodash';

// /************************************************
//  * convert string to number
//  * @arg {String} str - string to convert
//  * @arg {Booleam} options.allowNegative - allow negative numbers
//  * @arg {Booleam} options.alowDecimal - allow decimal numbers
//  * @return {Number}
//  */
// export const toNumber = (str = '') => {
//   if (_.isNumber(str)) return str;
//   if (!_.isString(str)) return 0;

//   const reg = /[^0-9.-]+/g;

//   const res = str.replace(reg, '');
//   // if (res.slice(-1) === '.') res += '0';

//   return Number(res);
// };

// /***********************************************
//  * limit message to 500 characters
//  * @param {String} str - str to limit
//  * @param limitSize - Default: 500
//  *
//  *
//  */
// export const trimString = (str = '', limitSize = 500) => (
//   str.length > limitSize
//     ? `${str.substring(0, limitSize - 3)}...`
//     : str
// );

// export const parseJSON = (str) => {
//   try {
//     return JSON.parse(str);
//   } catch (e) {
//     return ;
//   }
// };

// export const getfullName = (firstName = '', lastName = '', middleName = '') => `${firstName} ${middleName ?? ''} ${lastName}`;

// export const getInitialName = (firstName = '', lastName = '') => {
//   const initialName = _.slice(firstName, 0, 1) + _.slice(lastName, 0, 1);

//   return _.upperCase(initialName);
// };

// export const removeSpaces = (str = '') => {
//   if (!_.isString(str)) return '';

//   let trimmedStr = str.trim();
//   trimmedStr = trimmedStr.replace(/\s{2,}/g, '');
//   trimmedStr = trimmedStr.replace(/\s*-\s*/g, '-');
//   return trimmedStr;
// };

export const plural = (str = '', count = 1, pluralStr = '') => {
  if (count === 1) return str;
  return pluralStr ? pluralStr : `${str}s`;
};

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
