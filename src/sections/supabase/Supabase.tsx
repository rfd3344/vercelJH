'use client';
import React from 'react';
import _ from 'lodash';


import Account from './ui/Account';
import ProductFilter from './ui/ProductFilter';
import ProductList from './ui/ProductList';

export default function Supabase() {



  return (
    <section id="Supabase" className=''>

      <Account />
      <ProductFilter />
      <ProductList />
    </section>
  );
}
