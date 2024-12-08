'use client';


import {
  useGetProductListQuery,
  useGetProductByIdQuery,
} from 'src/api/vercelApi'



export default function ClientDemo2() {

  const { data, error, isLoading } = useGetProductListQuery()
  const { data: product } = useGetProductByIdQuery(2)

  return (
    <section id="ClientDemo2">
      <h3>ClientDemo2</h3>


      {JSON.stringify(data, null, ' ')}
      <pre>
        {JSON.stringify(product, null, ' ')}
      </pre>


    </section>
  );
}
