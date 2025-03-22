import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import _ from 'lodash';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@shadcn/ui/table';

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
      <TableHeader>
        <TableRow>

          {columnProps?.map((item: ColumProps) => (
            <TableHead
              key={item.head}
              className={`bg-primary text-black ${item.align ?? 'text-left'}`}
            >
              {item.head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody >
        {data?.map((row: any, rowIndex) => (
          <TableRow key={row?._id || rowIndex}>
            {columnProps?.map((item: ColumProps) => (
              <TableCell key={item.head} className={`${item.align ?? 'text-left'}`} >
                {_.isFunction(item.cell) ? item.cell(row, rowIndex) : item.cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>

  );

}
