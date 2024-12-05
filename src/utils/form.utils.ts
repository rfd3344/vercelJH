import _ from 'lodash';


export const numberOnly = (str = '') => {
  if (!_.isString(str)) return str;
  const reg = /[^0-9]/g;
  return str.replace(reg, '');
};
