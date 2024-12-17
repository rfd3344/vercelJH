'use client';
import React from 'react';
import _ from 'lodash';

import TableBasic from 'src/components/dataDisplay/TableBasic';
import Button from 'src/components/navigation/Button';

import {
  useGetCatListQuery,
  usePostCatMutation,
  useDeleteCatMutation,
} from 'src/query/vercelQuery';

interface IProps {
  data: DataRow[];
}



interface DataRow {
  name: string;
  path: string;
}

export default function MongoTable({ }) {
  const { data: catList } = useGetCatListQuery();
  const res = usePostCatMutation();
  const [deleteCat] = useDeleteCatMutation();


  const handleClick = async (id: any) => {
    // console.warn('id', id)
    const resp = await deleteCat(id);
    console.warn('res', res);
  };

  return (
    <TableBasic
      columnProps={[
        { head: 'id', cell: (row: any) => row._id },
        { head: 'name', cell: (row: any) => row.name },
        { head: 'age', cell: (row: any) => row.age },
        {
          head: 'action', cell: (row: any) => <div >
            <Button onClick={() => handleClick(row._id)} >DELETEs</Button>
          </div >,
        },

      ]}
      data={catList}
    />
  );

}
