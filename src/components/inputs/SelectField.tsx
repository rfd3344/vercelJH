import { ReactNode, ChangeEvent } from 'react';
import { Select, Label } from 'flowbite-react';

import FormContoller from './FormController';


interface IProps {
  name: string,
  label?: string,
  value?: string,
  options?: Option[],
  formObj?: any,
  rules?: any,
  onChange?: (value: string, name: string) => void,
  [key: string]: any;
}

type Option = {
  label: ReactNode,
  value: string,
  disabled?: boolean,
}

/*********************************************************************
 * @param options - [{ label: 'label1', value: 'value1' }]
 * @param formObj - data from react-hook-form
 * @param rules - check https://react-hook-form.com/api/useform/register/
 *
 *
 */
export default function SelectField({
  name = '',
  label,
  value = '',
  options = [],
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
    <FormContoller
      name={name}
      rules={rules}
      label={label}
      formObj={formObj}
      value={value}
      onChange={handleChange}
      render={({ errorMessage, label, ...field }: any) => (
        <section id='SelectorCarly' {...rest}>
          <div className="mb-2">
            <Label htmlFor={name} color={errorMessage ? 'failure' : 'gray'} value={label} />
          </div>
          <Select
            id={name}
            helperText={errorMessage ? errorMessage : ''}
            color={errorMessage ? 'failure' : 'gray'}
            {...rest}
            {...field}
          >
            <option disabled value="">Select</option>
            {options?.map((item: any, key: number) => (
              <option
                key={key}
                value={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </option>
            ))}
          </Select>
        </section>
      )}
    />

  );

}
