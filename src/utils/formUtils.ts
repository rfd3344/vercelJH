import _ from 'lodash';

export const phoneNumberOnly = (str = '') => {
  const reg = /[^0-9()+]/g;
  return str.replace(reg, '');
};

export const numberOnly = (str = '') => {
  if (!_.isString(str)) return str;
  const reg = /[^0-9]/g;
  return str.replace(reg, '');
};

export const toCurrency = (
  number = 0,
  options = {
    showDecimal: false,
    showDollarSign: false,
  },
) => {
  if (isNaN(number)) number = 0;

  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: options.showDecimal ? 2 : 0,
  });

  const currency = formatter.format(number);
  if (options.showDollarSign) return currency;
  return _.replace(currency, '$', '');
};

export const cardNumberOnly = (str = '') => {
  const filterNumbers = str.replace(/[^0-9]/g, '');
  return filterNumbers
    ? (filterNumbers.match(/.{1,4}/g)?.join(' ') as string)
    : '';
};

export const letterDashSpaceOnly = (str = '') => {
  const reg = /[^a-zA-Z- ]/g;
  return str.replace(reg, '');
};

export const patterns = {
  // email pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  // eslint-disable-next-line no-useless-escape
  // emailOnly: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

  emailOnly: /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/,
  numberOnly: /[^0-9]/g,
  phoneNumberOnly: /[^0-9()+]/g,
  //Minimum eight characters, at least one letter and one number:
  passwordOnly: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

/************************************************************************************************
 *
 *
 *
 */
export const getEnumOptions = (EnumObj: Obj) =>
  _.keys(EnumObj).map((key) => ({
    value: key,
    label: EnumObj[key],
  }));
