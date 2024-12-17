'use client';
import React from 'react';
import _ from 'lodash';

import Button from 'src/components/navigation/Button';



import { useGetCatListQuery } from 'src/query/vercelQUery'

export default function MongoActions({ }) {

  const handleAdd = () => {

  }
  return (
    <section id="MongoActions">
      <div className='flex justify-between mt-2'>
        <div>

        </div>
        <div>
          <Button onClick={handleAdd}>Add</Button>
        </div>
      </div>

    </section>
  );
}
