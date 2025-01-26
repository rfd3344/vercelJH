
'use client';
import React from 'react';
import _ from 'lodash';

import ButtonLink from './ButtonLink';
import Typography from 'src/components/dataDisplay/typography';

export default function LinksSection({ title = '', linkMap = {}, ...rest }) {

  return (
    <div className="mt-2" {...rest} >
      <Typography variant='h3' > {title} </Typography>
      <div className='flex gap-3 flex-wrap' >
        {_.keys(linkMap).map((key) => (
          <ButtonLink key={key} text={key} to={linkMap[key]} />
        ))}
      </div>

    </div>
  );
}
