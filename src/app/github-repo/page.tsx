import React from 'react';
import _ from 'lodash';

import GithubAccordion from 'src/sections/githubRepo/GithubAccordion';

export default async function Page() {
  return (
    <main id="github-repo" className='container'>
      <GithubAccordion />
    </main>
  );
}
