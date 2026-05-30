
import _ from 'lodash';
import { Accordion } from 'src/components/molecules/accordion';

import { groupByRoot, GithubFile } from './github-repo.utils';

import { Grid, GridItem } from 'src/components/atoms/grid';
import { FileItem } from './file-item';

interface IProps {
  files: GithubFile[];
  repoPath: string;
}

export function GithubRepoAccordion({
  files,
  repoPath
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
            <GridItem key={file.path} span={6} sm={4} lg={3} xl={2}>
              <FileItem file={file} repoPath={repoPath} />
            </GridItem>
          ))}
        </Grid>,
      }))}
    />
  );
}
