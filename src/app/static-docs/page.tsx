import _ from 'lodash';

import { GithubRepoAccordion } from '@/sections/git-repo/github-repo-accordion';
import { loadGithubRepoTree, STATIC_DOCS_REPO } from '@/sections/git-repo/github-repo.utils';


export default async function StaticDocsPage() {

  const tree = await loadGithubRepoTree(STATIC_DOCS_REPO);


  return (
    <main id="StaticDocsPage" className='container mx-auto my-4'>
      <GithubRepoAccordion files={tree} repoPath={STATIC_DOCS_REPO} />
    </main>
  );
}
