import React, { useState, useEffect } from 'react';


import ServerDemo from './ServerDemo';

import ClientDemo1 from 'src/sections/demo/ClientDemo1';
import ClientDemo2 from 'src/sections/demo/ClientDemo2';

interface IProp {
  params: {
    a?: string;
  };
  searchParam: {
    aa: string;
  }
}


export default async function Page({ params, searchParam }: IProp) {
  const { a = [] } = params;
  console.warn('params', params, searchParam);
  return (
    <main>
      <ServerDemo />
      <ClientDemo1 />
      <ClientDemo2 />


    </main>
  );
}
