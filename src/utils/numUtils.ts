import _ from 'lodash';

/************************************************
 * convert string to number
 * @param {String} str - string to convert
 * @param {Booleam} options.allowNegative - allow negative numbers
 * @param {Booleam} options.alowDecimal - allow decimal numbers
 * @return {Number}
 */
export const toNumber = (
  str = '',
  options = {
    allowNegative: false,
    alowDecimal: false,
  },
) => {
  if (!_.isString(str)) return 0;

  const { allowNegative, alowDecimal } = options;

  const reg = (() => {
    if (allowNegative && alowDecimal) return /a/g;
    else if (allowNegative) return /a/g;
    else if (alowDecimal) return /a/g;
    else return /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
  })();

  return str.match(reg)?.join('');
};

/*********************************************
 * format number
 * @param {String} str - string to convert
 * @return {String}
 * @example 1234567 -> 1,234,567
 */
export const formatNumber = (number = 0) => {
  if (!_.isNumber(number)) return '';

  return Intl.NumberFormat().format(number);
};

//this gives percentage values
export const percentageCalculator = (partialValue = 0, totalValue = 0) =>
  (totalValue * partialValue) / 100;
