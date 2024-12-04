

import React from 'react';
import _ from 'lodash';
import { useSearchParams } from 'src/libs/next';

export default function TitleFolder() {
  const searchParams = useSearchParams();

  return (
    <div>
      <h5 >{searchParams.get('name')}</h5>
    </div>
  );
}
