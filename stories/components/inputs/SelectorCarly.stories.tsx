import React, { useState } from 'react';

import Button from 'src/components/navigation/Button';

import { useForm } from 'src/hooks/useForm';
import SelectField from 'src/components/inputs/SelectField';

export default {
  title: 'components/inputs/SelectField',

};

const options = [
  { label: 'empty', value: '' },
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' },
  { label: 'label3', value: 'value3' },
];

export const Default = () => {
  const [value, setValue] = useState('');

  const {
    formObj,
    handleSubmit,
  } = useForm({
    formTest: value,
  });


  return (
    <article>

      <h5> value: {value} </h5>
      <SelectField
        name="test"
        value={value}
        options={options}
        onChange={(value) => setValue(value)}
      />

      <h5>without label, value: {value} </h5>
      <SelectField
        name="test2"
        label=""
        value={value}
        options={options}
        onChange={(value) => setValue(value)}
      />


      <h5> disabled with value </h5>
      <SelectField
        name="test"
        value={value}
        options={options}
        disabled
      />

      <h5> form validation check </h5>
      <SelectField
        name="formTest"
        options={options}
        formObj={formObj}
        rules={{
          required: 'formTest is a required field',
          validate: {
            testFailure: (value: any) => `test failure message: ${value}`,
          },
        }}
        onChange={(value) => setValue(value)}
      />
      <Button
        onClick={handleSubmit(() => { })}
      >ClickForValidate</Button>

    </article>
  );
};
