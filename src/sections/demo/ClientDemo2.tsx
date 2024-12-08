'use client';


import { useGetUserListQuery, useGetUserByIdQuery } from 'src/core/redux/apiSlice'

export default function ClientDemo2() {

  const { data, error, isLoading } = useGetUserListQuery()
  const { data: user } = useGetUserByIdQuery(2)

  return (
    <section id="ClientDemo2">
      <h3>ClientDemo2</h3>


      {JSON.stringify(data, null, ' ')}
      <pre>

        {JSON.stringify(user, null, ' ')}
      </pre>


    </section>
  );
}
