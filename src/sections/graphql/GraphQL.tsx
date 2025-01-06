'use client';

import React, { useCallback, useLayoutEffect, useState } from 'react';

import { useQuery } from 'src/libs/apollo';
import TableBasic from 'src/components/dataDisplay/TableBasic';
import {
  GET_USERS,
  GET_USER,
} from './query';

import UserPosts from './AllPosts';

export default function GraphQL() {

  const { loading, error, data } = useQuery(GET_USERS, {
    // variables: { id: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="GraphQL" className='mt-2'>
      {/* <TableBasic
        columnProps={[
          { head: 'ID', cell: (row: any) => row.id },
          { head: 'Name', cell: (row: any) => row.name },
          { head: 'Email', cell: (row: any) => row.email },
          { head: 'Address', cell: (row: any) => `${row.address.street}, ${row.address.city}, ${row.address.zipcode}` },
          { head: 'Geo', cell: (row: any) => `${row.address.geo.lat}, ${row.address.geo.lng}` },
        ]}
        data={data?.users?.data}
      /> */}


      <UserPosts />
    </section>
  );

}
