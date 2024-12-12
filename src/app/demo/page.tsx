import React, { useState, useEffect } from 'react';


import ClientDemo1 from 'src/sections/demo/ClientDemo1';
import ClientDemo2 from 'src/sections/demo/ClientDemo2';

import ServerDemo from './ServerDemo';



export default async function Page() {


  return (
    <main id="demo">

      <ServerDemo />
      <ClientDemo1 />
      <ClientDemo2 />
    </main>
  );
}
