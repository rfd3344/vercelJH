'use client';

import _ from 'lodash';


import { Accordion } from 'src/components/molecules/accordion';

import { groupByRoot } from 'src/sections/githubRepo/githubRepoUtils';
import { FolderItems } from 'src/sections/githubRepo/folder-items';

export function GithubRepoAccordion({
  files
}: any) {


  const filteredFiles = files?.filter(
    (item: any) => item?.type !== 'tree',
  );
  const groupedFiles = groupByRoot(filteredFiles);


  // console.warn('tree', groupedFiles);
  return (
    <Accordion
      items={_.map(groupedFiles, (files, root) => ({
        title: root,
        content: <FolderItems folderFiles={files} />,
      }))}
    />
  );
}
