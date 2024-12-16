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

export default function MongoDialog({

}: any) {

  return (
    <section id="MongoDialog">
      1111
    </section>
  );
}
