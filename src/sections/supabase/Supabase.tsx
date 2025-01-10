'use client';
import React from 'react';
import _ from 'lodash';

import { supabase } from 'src/libs/supabase';
import Button from 'src/components/navigation/Button';


export default function Supabase() {


  React.useEffect(() => {
    supabase.from('product').select('id,name').then(resp => {

      console.warn('supabase', resp);
    });
  });

  const handleAddNew = async () => {

    const { data, error } = await supabase
      .from('product')
      .insert([
        { name: 'Denmark'},
      ])
      .select();


  };

  return (
    <section id="Supabase" className=''>
      Supabase
      <Button onClick={handleAddNew}> Add new</Button>
    </section>
  );
}
