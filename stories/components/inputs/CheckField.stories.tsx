import React, { useState } from 'react';

import Button from 'src/components/navigation/Button';

import { useForm } from 'src/hooks/useForm';
import CheckField from 'src/components/inputs/CheckField';

export default {
  title: 'components/inputs/CheckField',
};


export const Default = () => {
  const [value, setValue] = useState(false);

  const {
    formObj,
    handleSubmit,
  } = useForm({
    formTest: value,
  });

  return (
    <article>
      <h5> Default</h5>
      <CheckField
        name="test"
        label="This is for test only"
      />

      <h5> Form validation check, value:{value.toString()} </h5>
      <aside >
        <CheckField
          name="formTest"
          label="This is for test only2"
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
      </aside>

    </article>
  );
};
