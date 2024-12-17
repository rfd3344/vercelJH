import React from 'react';


import MongoActions from 'src/sections/mongo/MongoActions';
import MongoTable from 'src/sections/mongo/MongoTable';
import MongoDialog from 'src/sections/mongo/MongoDialog';

import { publicEnv } from 'src/core/envConfig';

export default async function Page() {

  // const data = await (await fetch(`${publicEnv().VERCEL_SERVER}/api/cat`)).json()
  // console.warn('data', data)
  return (
    <main id="mongo" className='container'>
      <MongoActions />
      <MongoTable />
      <MongoDialog />
    </main>
  );
}
