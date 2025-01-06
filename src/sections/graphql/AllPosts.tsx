
import React, { useState } from 'react';

import { useQuery, useMutation } from 'src/libs/apollo';
import { useForm } from 'src/hooks/useForm';
import InputField from 'src/components/inputs/InputField';
import TableBasic from 'src/components/dataDisplay/TableBasic';
import Loading from 'src/components/dataDisplay/Loading';
import Button from 'src/components/navigation/Button';
import Dialog from 'src/components/modal/Dialog';

import {
  GET_POSTS,
  ADD_POST,
} from './query';

export default function AllPosts() {

  const { loading, error, data } = useQuery(GET_POSTS);
  const [addPost] = useMutation(ADD_POST);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    handleSubmit,
    formObj,
    reset,
  } = useForm({});


  const handleAddNew = (data: any) => {

    addPost({ variables: { input: data } }).then(resp => {
      console.warn('PostAdded', resp);
      setIsDialogOpen(false);
    });
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
          { head: 'body', cell: (row: any) => row.body },
        ]}
        data={data?.posts?.data}
      />
      <Dialog
        open={isDialogOpen}
        title="Post Dialog"
        onClose={() => setIsDialogOpen(false)}
      >
        <InputField
          name="title"
          formObj={formObj}
          rules={{ required: 'Name is a required field' }}

        />
        <InputField
          name="body"
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
