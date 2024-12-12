'use client';
import { useState } from 'react';
import _ from 'lodash';


import { useForm } from 'src/hooks/useForm';
import InputField from 'src/components/inputs/InputField';
import SelectField from 'src/components/inputs/SelectField';
import RadioField from 'src/components/inputs/RadioField';
import CheckField from 'src/components/inputs/CheckField';
import Button from 'src/components/navigation/Button';

import ProductItem from './ui/ProductItem';


const data = [...Array(100).keys()];

export default function SearchFilter() {

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };



  return (
    <section id="SearchFilter">

      <Button onClick={handleClick}>
        click {count}
      </Button>
      <InputField />
      <SelectField />
      <RadioField />
      <CheckField />


      {data.map(item => (
        <ProductItem data={item} key={item} />
      ))}
    </section>
  );
}
