import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import _ from 'lodash';

import { Table } from 'flowbite-react';


interface IProps {
  columnProps: ColumProps[];
  data: any[];
};



export type ColumProps = {
  head: string;
  cell: ReactNode | Function;
  // cell: React.ReactNode;
  align?: string;
  // align?: 'left' | 'right' | 'center';
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

}: IProps) {


  return (
    <section id="TableBasic">
      <Table>
        <Table.Head>
          {columnProps?.map((item: ColumProps) => (
            <Table.HeadCell key={item.head}>
              {item.head}
            </Table.HeadCell>
          ))}
        </Table.Head>

        <Table.Body className="divide-y">
          {data?.map((row: any, rowIndex) => (
            <Table.Row key={row?.name || rowIndex}>
              {columnProps?.map((item: ColumProps) => (
                <Table.Cell key={item.head}>
                  {_.isFunction(item.cell) ? item.cell(row, rowIndex) : item.cell}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );

}
