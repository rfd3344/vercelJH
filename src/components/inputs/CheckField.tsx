import { ReactNode, ChangeEvent } from 'react';
import _ from 'lodash';
import { Checkbox, Label } from 'flowbite-react';

import FormController from './FormController';

interface IProps {
  name?: string;
  label?: ReactNode;
  formObj?: any;
  onChange?: (value: boolean, name: string) => void;
  [key: string]: any;
}

/*******************
 *
 * @param rules - check https://react-hook-form.com/docs/useform/register#options
 *
 */
export default function CheckField({
  name = '',
  label = '',
  value = false,
  formObj,
  rules = {},
  onChange = () => { },
  ...rest
}: IProps) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    onChange(!!checked, name);
  };

  return (
    <FormController
      name={name}
      rules={rules}
      label={label}
      formObj={formObj}
      value={value}
      onChange={handleChange}
      render={({ errorMessage, label, ...field }: any) => (
        <section id='CheckBoxCarly' {...rest}>
          <div>
            <Checkbox
              id={name}
              {...field}
            />
            <Label
              className='ml-2'
              htmlFor={name}
              color={errorMessage ? 'failure' : 'gray'}
              value={label}
            />
          </div>

          {errorMessage && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errorMessage}
            </p>
          )}

        </section>
      )}
    />
  );
}