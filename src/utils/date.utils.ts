import dayjs from 'dayjs';
import _ from 'lodash';

export const test = () => {
  const res = dayjs().format('YYYY-MM-DDTHH:mm:ssZ[Z]');
  return res;
};
