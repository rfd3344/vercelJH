'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import Loading from 'src/components/dataDisplay/Loading';
// import Accordion from 'src/components/dataDisplay/Accordion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shadcn/ui/accordion';

import FileItem from 'src/sections/githubRepo/FileItem';
import { groupByRoot } from 'src/sections/githubRepo/githubRepoUtils';
import { GitFileType } from 'src/sections/githubRepo/githubRepoConst';

import { useGetMasterTreeQuery } from 'src/query/githubRepo';

export default function GithubAccordion() {

  const { repoPath = '' } = useSelector(
    (state: any) => state.githubRepo,
  );

  const { data, isError, isLoading } = useGetMasterTreeQuery(repoPath);


  const files = data?.tree?.filter(
    (item: any) => item?.type !== GitFileType.tree,
  );
  const groupFiles = groupByRoot(files);




  if (isError) return <h4 className='text-center m-4'> Fail To Load Data</h4>;

  if (isLoading) return <Loading />;

  return (
    <section id="GithubAccordion" className='mt-2'>
      <Accordion type="single" collapsible className="w-full" defaultValue='/'>
        {_.keys(groupFiles)
          .sort()
          .map((key) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger >{key}</AccordionTrigger>
              <AccordionContent>
                <div className='grid gap-2 grid-cols-2  md:grid-cols-6' >
                  {groupFiles[key].map((file) => (
                    <FileItem key={file.path} file={file} />
                  ))}
                </div>
              </AccordionContent>

            </AccordionItem>
          ))}


      </Accordion>

    </section>
  );
}
