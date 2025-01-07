
import React, { useState } from 'react';
import _ from 'lodash';

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
  UPDATE_POST,
  DELETE_POST,
} from './query';

export default function AllPosts() {

  const { loading, error, data } = useQuery(GET_POSTS);
  const [addPost] = useMutation(ADD_POST);
  const [updatePost] = useMutation(UPDATE_POST);
  const [deletePost] = useMutation(DELETE_POST);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    handleSubmit,
    formObj,
    reset,
  } = useForm({});


  const handleSave = ({ id, ...data }: any) => {

    if (id) {
      updatePost({ variables: { input: data, id } }).then(resp => {
        console.warn('updatePost', resp);
        setIsDialogOpen(false);
      });
    } else {
      addPost({ variables: { input: data } }).then(resp => {
        console.warn('addPost', resp);
        setIsDialogOpen(false);
      });
    }

  };

  const handleUpdate = (data: any) => {
    reset(_.pick(data, ['id', 'body', 'title']));
    setIsDialogOpen(true);

  };

  const handleDelete = (id: string) => {
    deletePost({ variables: { id: id } }).then(resp => {
      console.warn('deletePost', resp);
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
          {
            head: 'Action', cell: (row: any) => <div className='flex gap-2'>
              <Button color="green" onClick={() => handleUpdate(row)}>Update</Button>
              <Button color="red" onClick={() => handleDelete(row.id)}>Delete</Button>
            </div>,
          },

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
          <Button color="secondary" onClick={handleSubmit(handleSave)}>Save</Button>
        </div>
      </Dialog>
    </section>
  );

}
