import _ from 'lodash';

import { GithubFiles } from 'src/types/githubType';

import githubSlice from 'src/core/redux/githubSlice';

type GetMasterTreeResponse = {
  sha?: string;
  tree?: GithubFiles[];
  truncated?: boolean;
  url?: string;
};

const extendedApi = githubSlice.injectEndpoints({
  endpoints: (build) => ({
    getMasterTree: build.query<GetMasterTreeResponse, string>({
      query: (repoPath = '') => `${repoPath}/git/trees/main?recursive=1`,
    }),

  }),
});


export const {
  useGetMasterTreeQuery,

} = extendedApi;

export default extendedApi;
