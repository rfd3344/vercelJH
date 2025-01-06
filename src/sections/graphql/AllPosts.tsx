
import React, { useCallback, useLayoutEffect, useState } from 'react';

import { useQuery } from 'src/libs/apollo';
import { useForm } from 'src/hooks/useForm';
import InputField from 'src/components/inputs/InputField';
import TableBasic from 'src/components/dataDisplay/TableBasic';
import Loading from 'src/components/dataDisplay/Loading';
import Button from 'src/components/navigation/Button';
import Dialog from 'src/components/modal/Dialog';

import {
  GET_POSTS,
} from './query';

export default function AllPosts() {

  const { loading, error, data } = useQuery(GET_POSTS);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    handleSubmit,
    formObj,
    reset,
  } = useForm({});


  const handleAddNew = (data: any) => {
    console.warn(data);
  };

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="AllPosts" className='mt-2'>

      <div className='flex justify-between'>
        <h3> AllPosts </h3>
        <div>
          <Button
            color='secondary'
            onClick={() => {
              reset({});
              setIsDialogOpen(true);
            }}
          >
            Add New
          </Button>
        </div>
      </div>
      <TableBasic
        columnProps={[
          { head: 'id', cell: (row: any) => row.id },
          { head: 'title', cell: (row: any) => row.title },
        ]}
        data={data?.posts?.data}
      />
      <Dialog
        open={isDialogOpen}
        title="Post Dialog"
        onClose={() => setIsDialogOpen(false)}
      >
        <InputField
          name="name"
          formObj={formObj}
          rules={{ required: 'Name is a required field' }}

        />
        <InputField
          name="age"
          formObj={formObj}
          rules={{ required: 'Age a required field' }}

        />
        <div className='flex justify-end mt-2'>
          <Button color="secondary" onClick={handleSubmit(handleAddNew)}>Add New</Button>
        </div>
      </Dialog>
    </section>
  );

}
