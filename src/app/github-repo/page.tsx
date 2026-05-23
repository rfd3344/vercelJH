import _ from 'lodash';

import { GithubRepoAccordion } from 'src/sections/githubRepo/github-repo-accordion';


export default async function GithubRepoPage() {

  // NEXT_PUBLIC_GITHUB_API: 'https://api.github.com/repos',
  // NEXT_PUBLIC_GITHUB_RAW: 'https://raw.githubusercontent.com',
  // https://api.github.com/repos/rfd3344/staticJH/git/trees/main?recursive=1
  const files = await fetch('https://api.github.com/repos/rfd3344/staticJH/git/trees/main?recursive=1').then(async res => {
    const data = await res.json();
    return data.tree;
  });


  return (
    <main id="GithubRepoPage" className='container mx-auto my-4'>

      <GithubRepoAccordion files={files} />
    </main>
  );
}
