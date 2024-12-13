import React from 'react';
import _ from 'lodash';


import SearchFilter from 'src/sections/search/SearchFilter';

interface IProp {
  params: {
    category: string[];
  }
  searchParams: {
    name?: string | string[];
    price_from?: string;
  }
}


// http://localhost:3344/search/food/drink?name=111&name=222

export default async function Page({ params, searchParams }: any) {


  return (
    <main id="search" className='container'>

      <h5>params:</h5>
      <pre>{JSON.stringify(params, null, ' ')}</pre>
      <h5>searchParams:</h5>
      <pre>{JSON.stringify(searchParams, null, ' ')}</pre>

      <SearchFilter />
    </main>
  );
}
