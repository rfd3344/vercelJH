'use client';
import React from 'react';
import _ from 'lodash';

import { Link } from 'src/libs/next';
import { Table } from 'flowbite-react';


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
        <Table.Head>

          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Path</Table.HeadCell>

        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item) => (
            <Table.Row key={item?.name} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item?.name}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Link href={item.path} target="_blank">
                  {item.path}
                </Link>
              </Table.Cell>


            </Table.Row>
          ))}


        </Table.Body>
      </Table>

    </section>
  );
}
