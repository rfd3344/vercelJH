'use client';



import { useGetMockUserQuery } from 'src/core/redux/apiSlice'

export default function ClientDemo2() {

  const { data, error, isLoading } = useGetMockUserQuery()
  console.warn(data)
  return (
    <section id="ClientDemo2">
      <h3>ClientDemo2</h3>


        {JSON.stringify(data, null, ' ')}


    </section>
  );
}
