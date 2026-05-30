import _ from 'lodash';


export const STATIC_DOCS_REPO = 'rfd3344org/static-docs';
export const STATIC_PICTURES_REPO = 'rfd3344org/static-pictures';

export const PDF_VIEWER_URL = 'https://mozilla.github.io/pdf.js/web/viewer.html?file=';


export const loadGithubRepoTree = async (repo: string) => {
  const res = await fetch(`https://api.github.com/repos/${repo}/git/trees/main?recursive=1`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.tree;
};

export const getGithubRawUrl = (repo = '', filePath = '') => `https://raw.githubusercontent.com/${repo}/master/${filePath}`;

export const getGithubPreviewUrl = (repo = '', filePath = '') => `https://github.com/${repo}/blob/main/${filePath}`;


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
