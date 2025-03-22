
'use client';
import React from 'react';
import _ from 'lodash';

import ButtonLink from './ButtonLink';
import Typography from 'src/components/dataDisplay/typography';

import { homeLinks } from 'src/constants/home-links';



export default function LinkSections({ title = '', linkMap = {}, ...rest }) {

  return (
    <section >
      {homeLinks.map((section) => (
        <div key={section.sectionHeader} className="mt-2" {...rest} >
          <Typography variant='h3' > {section.sectionHeader} </Typography>
          <div className='flex gap-3 flex-wrap' >
            {section.links.map((link) => (
              <ButtonLink key={link.title} text={link.title} to={link.url} />
            ))}
          </div>
        </div>
      ))}

    </section>
  );
}
