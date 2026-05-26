'use client';

import _ from 'lodash';


import { Accordion } from 'src/components/molecules/accordion';

import { groupByRoot, GithubFile } from 'src/sections/githubRepo/github-repo.utils';
// import { FolderItems } from 'src/sections/githubRepo/folder-items';

import { Grid, GridItem } from 'src/components/atoms/grid';
import { FileItem } from './ui/file-item';

interface IProps {
  files: GithubFile[];
}

export function GithubRepoAccordion({
  files
}: IProps) {

  const filteredFiles = files?.filter(
    (item: any) => item?.type !== 'tree',
  );

  const groupedFiles = groupByRoot(filteredFiles);


  return (
    <Accordion
      items={_.map(groupedFiles, (files, root) => ({
        title: root,
        content: <Grid className='gap-4'>
          {files.map((file: any) => (
            <GridItem key={file.path} span={3}>
              <FileItem file={file} />
            </GridItem>
          ))}
        </Grid>,
      }))}
    />
  );
}
