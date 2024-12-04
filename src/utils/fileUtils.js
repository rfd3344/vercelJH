import _ from 'lodash';

import { env } from 'src/core/envManager';
import { FileTypeEnum } from 'src/constants/fileConst';

export const getFileTyle = (fileName = '') => {
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
