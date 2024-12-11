import _ from 'lodash';

import { publicEnv } from 'src/core/envConfig';

import { GithubFiles } from 'src/types/githubType';

export const groupByRoot = (files: GithubFiles[] = []) => {
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

export const getGithubFileUrl = (repoPath = '', filePath = '') => `${publicEnv().GITHUB_RAW}/${repoPath}/master/${filePath}`;
