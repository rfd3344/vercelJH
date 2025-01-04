
import React, { Suspense } from 'react';

import Markdown from 'src/sections/markdown/Markdown';

import Loading from 'src/components/dataDisplay/Loading';
export default function Page({ }) {


  return (
    <main id="markdown" className='container break-all'>

      <Suspense fallback={<Loading />}>

        <Markdown />
      </Suspense>
    </main>
  );
}
