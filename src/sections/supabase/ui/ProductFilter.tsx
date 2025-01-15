
import React from 'react';
import _ from 'lodash';

import { supabase } from 'src/libs/supabase';
import Button from 'src/components/navigation/Button';
import InputField from 'src/components/inputs/InputField';


export default function ProductFilter() {


  const handleChange = (value = '') => {

  };


  return (
    <section id="ProductFilter" className='flex justify-between items-center my-2'>
      <InputField
        onChange={handleChange}
      />
      <Button>Add Product</Button>
    </section>
  );
}
