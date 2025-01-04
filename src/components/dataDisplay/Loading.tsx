'use client';
import React from 'react';

import IconSpinner from './IconSpinner';

export default function Loading({

}) {



  return (
    <section id="Loading" className='text-center m-3' >
      <IconSpinner size="xl" color="cyan" />
      <h4> Loading... </h4>
    </section>

  );
}
