
import React, { Suspense } from 'react';

import Markdown from 'src/sections/markdown/Markdown';

export default function Page({ }) {


  return (
    <main id="markdown" className='container break-all'>
      <Suspense fallback='loading'>

        <Markdown />
      </Suspense>
    </main>
  );
}
