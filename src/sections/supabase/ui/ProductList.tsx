
import React, { useState } from 'react';
import _ from 'lodash';

import { supabase } from 'src/libs/supabase';
import Button from 'src/components/navigation/Button';
import TableBasic from 'src/components/dataDisplay/TableBasic';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    supabase.from('product').select().then((resp: any) => {
      setProducts(resp.data);
      // console.warn('supabase', resp);
    });
  }, []);


  const handleUpdate = (id = 0) => {

  };

  return (
    <section id="Supabase" className=''>
      <TableBasic
        columnProps={[
          { head: 'id', cell: (row: any) => row.id },
          { head: 'name', cell: (row: any) => row.name },
          { head: 'category', cell: (row: any) => row.category_id },
          { head: 'brand', cell: (row: any) => row.brand_id },
          {
            head: 'Action',
            align:'text-right',
            cell: (row: any) => <div className='flex justify-end gap-2'>
              <Button color="success" onClick={() => handleUpdate(row.id)}>Update</Button>
              <Button color="red" onClick={() => handleUpdate(row.id)}>Delete</Button>
            </div>,
          },
        ]}
        data={products}
      />
    </section>
  );
}
