
'use client'
import React from 'react';
import _ from 'lodash';

import ButtonLink from './ButtonLink';


export default function LinksSection({ title = '', linkMap = {}, ...rest }) {

  return (
    <div className="mt-2" {...rest} >
      <h4 className='font-bold'> {title} </h4>
      <div className='flex gap-3 flex-wrap' >
        {_.keys(linkMap).map((key) => (
          <ButtonLink key={key} text={key} to={linkMap[key]} />
        ))}
      </div>

    </div>
  );
}
