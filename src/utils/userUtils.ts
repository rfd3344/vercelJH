import _ from 'lodash';

export const formatFullName = (firstName = '', lastName = '') => {
  if (!firstName && !lastName) return '';
  return `${firstName} ${lastName}`;
};
