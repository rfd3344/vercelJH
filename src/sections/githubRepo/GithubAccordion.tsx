'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import Accordion from 'src/components/dataDisplay/Accordion';

import FileItem from 'src/sections/githubRepo/FileItem';
import { groupByRoot } from 'src/sections/githubRepo/githubRepoUtils';
import { GitFileType } from 'src/sections/githubRepo/githubRepoConst';
// import { fetchMasterTree } from 'src/sections/githubRepo/githubRepoSlice';
import { useGetMasterTreeQuery } from 'src/query/githubRepo';

export default function GithubAccordion() {

  const { repoPath = '' } = useSelector(
    (state: any) => state.githubRepo,
  );

  const { data, error } = useGetMasterTreeQuery(repoPath);
  console.warn('error', error);

  const files = data?.tree?.filter(
    (item: any) => item?.type !== GitFileType.tree,
  );
  const groupFiles = groupByRoot(files);

  return (
    <section id="GithubAccordion" >

      <Accordion
        defaultExpandIndex={0}
        data={_.keys(groupFiles)
          .sort()
          .map((key) => ({
            summary: key,
            details: (
              <div className='grid gap-2 grid-cols-2  md:grid-cols-6' >
                {groupFiles[key].map((file) => (
                  <FileItem key={file.path} file={file} />
                ))}
              </div>
            ),
          }))}
      />

    </section>
  );
}
