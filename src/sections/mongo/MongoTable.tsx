'use client';
import React from 'react';
import _ from 'lodash';

import TableBasic from 'src/components/dataDisplay/TableBasic';
import Button from 'src/components/navigation/Button';

import {
  useGetCatListQuery,
  useDeleteCatMutation,
} from 'src/query/vercelQuery';

interface DataRow {
  name: string;
  path: string;
}

export default function MongoTable({ }) {
  const { data: catList } = useGetCatListQuery();

  const [deleteCat] = useDeleteCatMutation();


  const handleClick = async (id: any) => {
    const resp = await deleteCat(id);
    console.warn('res', resp);
  };

  return (
    <TableBasic
      columnProps={[
        { head: 'id', cell: (row: any) => row._id },
        { head: 'name', cell: (row: any) => row.name },
        { head: 'age', cell: (row: any) => row.age },
        {
          head: 'action', cell: (row: any) => <div >
            <Button color='red' onClick={() => handleClick(row._id)} >DELETE</Button>
          </div >,
        },

      ]}
      data={catList}
    />
  );

}
