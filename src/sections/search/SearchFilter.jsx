'use client';

import _ from 'lodash';


import { useForm } from 'src/hooks/useForm';
import InputField from 'src/components/inputs/InputField';
import SelectField from 'src/components/inputs/SelectField';
import RadioField from 'src/components/inputs/RadioField';
import CheckField from 'src/components/inputs/CheckField';


export default function SearchFilter() {


  return (
    <section id="SearchFilter">


      <InputField />
      <SelectField />
      <RadioField />
      <CheckField />

    </section>
  );
}
