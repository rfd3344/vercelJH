import dayjs from 'dayjs';

export const test = () => {
  const res = dayjs().format('YYYY-MM-DDTHH:mm:ssZ[Z]');
  return res;
};
