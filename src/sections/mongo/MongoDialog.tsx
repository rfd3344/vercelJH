'use client';
import React, { useState } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import Dialog from 'src/components/modal/Dialog';
import InputField from 'src/components/inputs/InputField';
import Button from 'src/components/navigation/Button';
import { RootState } from 'src/core/redux/store';
import { useForm } from 'src/hooks/useForm'

import { updateMongo } from './mongoSlice';

import {
  usePostCatMutation,
} from 'src/query/vercelQuery';


interface DataRow {
  name: string;
  path: string;
}

export default function MongoDialog({

}: any) {
  const dispatch = useDispatch()
  const [postCat] = usePostCatMutation();

  const [form, setForm] = useState({})
  const {
    handleSubmit,
    formObj,
  } = useForm(form);

  const { actionType = '' } = useSelector((state: RootState) => state.mongo)

  const handleChange = (value: string, name: string) => {
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleAddNew = () => {
    postCat(form).then(resp => {
      console.warn('resp', resp);
    }).then(() => {
      handleClose()
    })
  }

  const handleClose = () => {
    dispatch(updateMongo({
      actionType: ''
    }))
  }

  return (
    <section id="MongoDialog">

      <Dialog
        open={actionType === 'ADD'}
        title="Add New Cat"
        dismissible
        onClose={handleClose}
      >
        <InputField
          name="name"
          formObj={formObj}
          rules={{ required: 'Name is a required field' }}
          onChange={handleChange}
        />
        <InputField
          name="age"
          formObj={formObj}
          rules={{ required: 'Age a required field' }}
          onChange={handleChange}
        />
        <div className='flex justify-end mt-2'>
          <Button onClick={handleSubmit(handleAddNew)}>Add New</Button>
        </div>
      </Dialog>
    </section>
  );
}
