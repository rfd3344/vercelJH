import _ from 'lodash';

import { gitStaticApi } from './api';
import { GithubFiles } from 'src/types/githubType';

export const getMasterTree = async (repoPath = '') => {
  type GetMasterTreeResponse = {
    sha?: string;
    tree?: GithubFiles[];
    truncated?: boolean;
    url?: string;
  };

  const resp = await gitStaticApi().get<never, GetMasterTreeResponse>(
    `${repoPath}/git/trees/main?recursive=1`,
  );
  return resp;
};

// export const getMarkdownFiles = async () => {
//   const resp = await gitStaticApi().get(
//     `rfd3344/rfd3344.github.io/git/trees/63284f642f2ba4300fde01aa43e7426265856000?recursive=1`
//   );
//   console.warn('response', resp);
//   return resp;
// };

// https://api.github.com/repos/rfd3344/rfd3344.github.io/git/trees/63284f642f2ba4300fde01aa43e7426265856000?recursive=1
