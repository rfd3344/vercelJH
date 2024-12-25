'use client';
import React, { useState } from 'react';
import _ from 'lodash';

import { useSelector, useDispatch } from 'react-redux';

import Button from 'src/components/navigation/Button';
import {
  useGetCatListQuery,
} from 'src/query/vercelQuery';

import { updateMongo } from './mongoSlice';

export default function MongoActions({ }) {

  const dispatch = useDispatch();
  const handleAdd = async (id: any) => {
    dispatch(updateMongo({
      actionType: 'ADD',
    }));
  };

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
