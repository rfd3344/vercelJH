import React from 'react';
import _ from 'lodash';
import ResourceTable from 'src/sections/resource/ResourceTable';

export default function Page({ }) {


  const data = [
    {
      name: 'mockAPI product list',
      path: 'https://rfd3344.vercel.app/mock/product/index.json',
    },
    {
      name: 'mockAPI product item',
      path: 'https://rfd3344.vercel.app/mock/product/1.json',
    },
    {
      name: 'mockAPI user list',
      path: 'https://rfd3344.vercel.app/mock/user/index.json',
    },
    {
      name: 'api cat list',
      path: 'https://rfd3344.vercel.app/mock/cat/',
    },
    {
      name: 'api cat item',
      path: 'https://rfd3344.vercel.app/mock/cat/1',
    },
    {
      name: 'AWS-SAA-ExamNotes',
      path: 'https://rfd3344.vercel.app/pdf/AWS-SAA-ExamNotes.pdf',
    },
  ];

  return (
    <main id="resource" className='container overflow-x-auto'>
      <ResourceTable data={data} />
    </main>
  );
}
