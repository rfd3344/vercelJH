'use client';
import React from 'react';
import _ from 'lodash';

import { Link } from 'src/libs/next';
// import { Table } from 'flowbite-react';

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
  data: DataRow[];
}



interface DataRow {
  name: string;
  path: string;
}

export default function ResourceTable({
  data = [],
}: IProps) {

  return (
    <section id="ResourceTable">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Name</TableHead>
            <TableHead>Path</TableHead>
          </TableRow>

        </TableHeader>
        <TableBody className="divide-y">
          {data.map((item) => (
            <TableRow  key={item?.name} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell  className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item?.name}
              </TableCell>
              <TableCell  className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Link href={item.path} target="_blank">
                  {item.path}
                </Link>
              </TableCell>
            </TableRow>
          ))}


        </TableBody>
      </Table>

    </section>
  );
}
