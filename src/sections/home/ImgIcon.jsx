import React from 'react';
import _ from 'lodash';

import { Image } from 'src/libs/next';

export default function ImgIcon({ src = '', ...rest }) {
  return <Image alt='' src={src} width={15} height={15} {...rest} />;
}
