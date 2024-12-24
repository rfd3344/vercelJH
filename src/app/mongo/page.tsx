import React from 'react';


import MongoActions from 'src/sections/mongo/MongoActions';
import MongoTable from 'src/sections/mongo/MongoTable';
import MongoDialog from 'src/sections/mongo/MongoDialog';

import { publicEnv } from 'src/core/envConfig';

import { store } from 'src/core/redux/store';
import vercelQuery from 'src/query/vercelQuery';


export default async function Page() {

  await store.dispatch(vercelQuery.endpoints.getCatList.initiate());

  return (
    <main id="mongo" className='container'>
      <MongoActions />
      <MongoTable />
      <MongoDialog />
    </main>
  );
}
