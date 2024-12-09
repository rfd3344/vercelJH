import React, { useState } from 'react';

import Button from 'src/components/navigation/Button';

import { useForm } from 'src/hooks/useForm';
import InputField from 'src/components/inputs/InputField';


const TestIcon = () => (<span>@</span>);

export default {
  title: 'components/inputs/InputField',
};

export const Default = () => {
  const [value, setValue] = useState('defaultText');

  return (
    <article>
      <h5> OnChange handler, value: {value} </h5>

      <InputField
        name="test"
        value={value}
        onChange={(value) => setValue(value)}
      />

      <h5> OnBlur handler, value: {value} </h5>
      <InputField
        name="test"
        value={value}
        onBlur={(value) => setValue(value)}
      />
      <h5> Label </h5>
      <InputField
        label="I am label"
        value={value}
      />
      <h5> Placeholder </h5>
      <InputField
        placeholder="I am placeholder"
      />
      <h5> icon  </h5>
      <InputField
        icon={TestIcon}
        value="Text"
      />

      <h5> RightIcon  </h5>
      <InputField
        rightIcon={TestIcon}
        value="Text"
      />


      <h5> Disabled with value </h5>
      <InputField
        value="Text"
        disabled
      />


    </article>
  );
};


export const Validation = () => {

  const [value, setValue] = useState('defaultText');
  const {
    formObj,
    handleSubmit,
  } = useForm({
    formTest: value,
  });


  return (
    <article>
      <h4> test</h4>
      <InputField
        name="formTest"
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

        onClick={handleSubmit((data) => console.warn(data))}
      >ClickForValidate</Button>
    </article>
  );
};