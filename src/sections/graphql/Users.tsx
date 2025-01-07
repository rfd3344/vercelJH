
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
  GET_USERS,
} from './query';

export default function Users() {

  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="Users" className='mt-2'>
      <TableBasic
        columnProps={[
          { head: 'ID', cell: (row: any) => row.id },
          { head: 'Name', cell: (row: any) => row.name },
          { head: 'Email', cell: (row: any) => row.email },
          { head: 'Address', cell: (row: any) => `${row.address.street}, ${row.address.city}, ${row.address.zipcode}` },
          { head: 'Geo', cell: (row: any) => `${row.address.geo.lat}, ${row.address.geo.lng}` },
        ]}
        data={data?.users?.data}
      />
    </section>
  );

}
