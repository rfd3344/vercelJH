import React, { useState } from 'react';

import Button from 'src/components/navigation/Button';

import { useForm } from 'src/hooks/useForm';
import RadioField from 'src/components/inputs/RadioField';

export default {
  title: 'components/inputs/RadioField',

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
      <h5>value:{value.toString()}</h5>
      <h5> Default  </h5>
      <RadioField
        name="test"
        label="Test Label"
        value={value}
        options={options}
        onChange={(value) => setValue(value)}
      />

      <h5> Form validation check </h5>
      <aside >
        <RadioField
          name="formTest"
          value={value}
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

      </aside>

    </article>
  );
};
