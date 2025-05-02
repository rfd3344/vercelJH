'use client';

import React, { Suspense } from 'react';
import _ from 'lodash';

import { usePathname } from 'src/libs/next';
import { PagePath } from 'src/constants/page-path';
import Loading from 'src/components/dataDisplay/Loading';

import TitleGithubRepo from './TitleGithubRepo';
import TitleMarkdown from './TitleFolder';
import TitleWebpage from './TitleWebpage';

export default function NavTitle() {
  const pathname = usePathname();

  const PageTitle = () => {
    if (pathname === PagePath.home) return null;
    if (pathname === PagePath.repo) return <TitleGithubRepo />;
    if (pathname === PagePath.markdown) return <TitleMarkdown />;
    if (pathname === PagePath.webpage) return <TitleWebpage />;
  };

  return (
    <div className='break-all text-center'>
      <Suspense fallback={<Loading />} >
        <PageTitle />
      </Suspense>
    </div>
  );
}
