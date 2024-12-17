'use client';
import React from 'react';
import _ from 'lodash';

import TableBasic from 'src/components/dataDisplay/TableBasic';
import Button from 'src/components/navigation/Button';

import {
  useGetCatListQuery,
  usePostCatMutation,
} from 'src/query/vercelQUery'

interface IProps {
  data: DataRow[];
}



interface DataRow {
  name: string;
  path: string;
}

export default function MongoTable({ }) {
  const { data: catList } = useGetCatListQuery()
  const [postCat] = usePostCatMutation()
  // console.warn('catList', catList)
  // const catList = [
  //   { _id: '675d6b79b3316e13039637e9', age: 11, name: 'bbb\n' },
  //   { _id: '675d6bceb3316e13039637ea', age: 5, name: 'aa' },
  //   { _id: '675ebc5b79a181f988cdb6c2', name: 'name cat2', age: 11 }
  // ]


  const handleClick = async (id: any) => {
    await postCat({
      name: '111',
      age: 10
    }).then(resp => {
      console.warn('resp', resp)
    })
  }

  return (
    <TableBasic
      columnProps={[
        { head: 'id', cell: (row: any) => row._id },
        { head: 'name', cell: (row: any) => row.name },
        { head: 'age', cell: (row: any) => row.age },
        {
          head: 'action', cell: (row: any) => <div >
            <Button onClick={(row: any) => handleClick(row?._id)} >DELETEs</Button>
          </div >
        },

      ]}
      data={catList}
    />
  )

}
