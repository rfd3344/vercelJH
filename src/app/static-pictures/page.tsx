import _ from 'lodash';

import { GithubRepoAccordion } from 'src/sections/git-repo/github-repo-accordion';
import { loadGithubRepoTree, STATIC_PICTURES_REPO } from 'src/sections/git-repo/github-repo.utils';

export default async function StaticPicturesPage() {

  const tree = await loadGithubRepoTree(STATIC_PICTURES_REPO);


  return (
    <main id="StaticPicturesPage" className='container mx-auto my-4'>
      <GithubRepoAccordion files={tree} repoPath={STATIC_PICTURES_REPO} />
    </main>
  );
}
