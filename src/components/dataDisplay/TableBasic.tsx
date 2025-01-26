import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import _ from 'lodash';

import { Table } from 'flowbite-react';


interface IProps {
  columnProps: ColumProps[];
  data: any[];
  className?: string;
};



export type ColumProps = {
  head: string;
  cell: ReactNode | ((row: any, rowIndex: number) => ReactNode);
  align?: 'text-left' | 'text-right' | 'text-center';
}


/***********************************************************
 * basic table
 * @arg columnProps {Array}  [{ head: '', cell: row => row.data }]
 *  - head
 *  - cell: function for data display
 *  - align: can align columns, left/right/center
 *
 */
export default function TableBasic({
  columnProps = [],
  data = [],
  className = '',
}: IProps) {


  return (

    <Table id="TableBasic" className={className}>
      <Table.Head>
        {columnProps?.map((item: ColumProps) => (
          <Table.HeadCell key={item.head} className={`bg-cyan normal-case ${item.align ?? 'text-left'}`} >
            {item.head}
          </Table.HeadCell>
        ))}
      </Table.Head>

      <Table.Body className="divide-y text-black">
        {data?.map((row: any, rowIndex) => (
          <Table.Row key={row?._id || rowIndex}>
            {columnProps?.map((item: ColumProps) => (
              <Table.Cell key={item.head} className={`${item.align ?? 'text-left'}`} >
                {_.isFunction(item.cell) ? item.cell(row, rowIndex) : item.cell}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>

  );

}
