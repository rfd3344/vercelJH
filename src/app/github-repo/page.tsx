import _ from 'lodash';

import { GithubRepoAccordion } from 'src/sections/githubRepo/github-repo-accordion';

import { STATIC_JH_REPO_URL } from 'src/sections/githubRepo/github-repo.utils';

export default async function GithubRepoPage() {

  const files = await fetch(STATIC_JH_REPO_URL).then(async res => {
    const data = await res.json();
    return data.tree;
  });


  return (
    <main id="GithubRepoPage" className='container mx-auto my-4'>


      <GithubRepoAccordion files={files} />

    </main>
  );
}
