import React from 'react';
import _ from 'lodash';

import LinkSections from 'src/sections/home/LinkSections';
import InputLink from 'src/sections/home/InputLink';


export default function Page({ }) {

  return (
    <main id="home" className='container'>


      <LinkSections />
      <InputLink />


    </main>
  );
}
