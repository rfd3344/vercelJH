import _ from 'lodash';

import { publicEnv } from 'src/core/envConfig';
import { FileTypeEnum } from 'src/constants/file-type';

export const getFileType = (fileName = '') => {
  const fileExtension = _.lowerCase(fileName.split('.').pop());

  if (fileExtension === 'pdf') {
    return FileTypeEnum.pdf;
  } else if (fileExtension === 'md') {
    return FileTypeEnum.md;
  } else if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
    return FileTypeEnum.image;
  }

  return FileTypeEnum.others;
};
