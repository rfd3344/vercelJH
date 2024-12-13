import { ReactNode, ChangeEvent } from 'react';
import _ from 'lodash';
import { Radio, Label } from 'flowbite-react';

import FormController from './FormController';

interface IProps {
  name?: string;
  label?: ReactNode;
  formObj?: any;
  onChange?: (value: string, name: string) => void;
  [key: string]: any;
}

/*******************
 *
 * @param rules - check https://react-hook-form.com/docs/useform/register#options
 *
 */
export default function RadioField({
  name = '',
  label = '',
  value,
  options = [],  // { label, value }
  formObj,
  rules = {},
  onChange = () => { },
  ...rest
}: IProps) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    onChange(value, name);
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
        <section id='RadioCarly'  {...rest}>
          <Label>{label}</Label>
          {!_.isEmpty(options) && options?.map((item: any) => (
            <div
              key={item.value}
            >
              <Radio
                {...field}
                id={`${name}-${item?.value}`}
                value={item.value}
              />
              <Label className='ml-2' htmlFor={`${name}-${item?.value}`}>{item.label}</Label>
            </div>
          ))}

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