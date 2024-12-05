'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import Accordion from 'src/components/dataDisplay/Accordion';

import FielItem from 'src/sections/githubRepo/FielItem';
import { groupByRoot } from 'src/sections/githubRepo/githubRepoUtils';
import { GitFileType } from 'src/sections/githubRepo/githubRepoConst';
import { fetchMasterTree } from 'src/sections/githubRepo/githubRepoSlice';

export default function Page() {
  const dispatch = useDispatch();

  const { repoPath = '', masterFiles = [] } = useSelector(
    (state: any) => state.githubRepo,
  );

  const files = masterFiles.filter(
    (item: any) => item?.type !== GitFileType.tree,
  );
  const groupFiles = groupByRoot(files);

  useEffect(() => {
    if (!repoPath) return;

    dispatch(fetchMasterTree(repoPath) as any);
  }, [repoPath, dispatch]);

  return (
    <main id="GithubRepo" className='container '>
      <div >
        <Accordion
          defaultExpandIndex={0}
          data={_.keys(groupFiles)
            .sort()
            .map((key) => ({
              summary: key,
              details: (
                <div className='grid gap-2 grid-cols-2  md:grid-cols-6' >
                  {groupFiles[key].map((file) => (
                    <FielItem key={file.path} file={file} />
                  ))}
                </div>
              ),
            }))}
        />
      </div>
    </main>
  );
}
