import _ from 'lodash';
import numeral from 'numeral';

/**********
 * convert string to numbers, using numeral library
 * @ref http://numeraljs.com/#create
 */
export const toNumber = (str = '') => {
  const res = numeral(str);
  return res.value();
};

/*************
 * format numbers, using numeral library
 * @ref http://numeraljs.com/#format
 */
export const formatNumber = (num = 0, format = '0,0') => {
  if (!_.isNumber(num)) return '';
  const res = numeral(num).format(format);

  return res;
};
