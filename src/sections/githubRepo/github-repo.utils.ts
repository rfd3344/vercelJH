import _ from 'lodash';

// import { publicEnv } from 'src/core/envConfig';

// import { GithubFiles } from 'src/types/githubType';


export const STATIC_JH_REPO_URL = 'https://api.github.com/repos/rfd3344/staticJH/git/trees/main?recursive=1';

// export const getGithubFileUrl = (repoPath = '', filePath = '') => `${publicEnv().GITHUB_RAW}/${repoPath}/master/${filePath}`;
// export const getGithubFileUrl = (repoPath = '', filePath = '') => `https://raw.githubusercontent.com/${repoPath}/master/${filePath}`;
export const getStaticJHUrl = (filePath = '') => `https://raw.githubusercontent.com/rfd3344/staticJH/master/${filePath}`;


// https://raw.githubusercontent.com/CardieX/cardiex-frontend/a1a60095f3d42da378ab968b2efea05b5d0e1466/apps/back-office/public/flags/usa.svg?token=BPGW2WFW3L5ZBOI3BGWOWADKCU4LU
// src="https://github.com/rfd3344/staticJH/blob/main/image-main/Essense.jpg?raw=true"

// https://raw.githubusercontent.com/rfd3344/staticJH/refs/heads/main/image-main/Essense.jpg



export type GithubFile = {
  mode: string;
  path: string;
  sha: string;
  size: string;
  type: string;
  url: string;
};

export const groupByRoot = (files: GithubFile[]) => {
  const res = _.groupBy(files, (item) => {
    const pathArr = _.split(item.path, '/');
    const rootFolder = pathArr.length > 1 ? pathArr[0] : '/';
    return rootFolder;
  });

  return res;
};

export const omitRoot = (filePath = '') => {
  const pathArr = _.split(filePath, '/');
  if (pathArr.length < 2) return pathArr[0];

  return _.slice(pathArr, 1).join('/');
};
