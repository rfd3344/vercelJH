'use client';
import React from 'react';
import _ from 'lodash';

import Button from 'src/components/navigation/Button';


import {
  usePostCatMutation,
} from 'src/query/vercelQUery'


export default function MongoActions({ }) {
  const [postCat] = usePostCatMutation()
  const handleAdd = async (id: any) => {
    await postCat({
      name: '111',
      age: 10
    }).then(resp => {
      console.warn('resp', resp)
    })
  }

  return (
    <section id="MongoActions">
      <div className='flex justify-between mt-2'>
        <div>

        </div>
        <div>
          <Button color="secondary" onClick={handleAdd}>Add New Cat</Button>
        </div>
      </div>

    </section>
  );
}
