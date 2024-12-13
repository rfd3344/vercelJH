import { ReactNode, ChangeEvent } from 'react';
// import _ from 'lodash';

import { TextInput, Label } from 'flowbite-react';

import FormController from './FormController';


interface IProps {
  name?: string;
  label?: ReactNode;
  adaptor?: (value: string) => string;
  formObj?: any;
  onChange?: (value: string, name: string) => void;
  onBlur?: (value: string, name: string) => void;
  sx?: any;
  inputProps?: any;
  children?: ReactNode,
  [key: string]: any;
}

/*********************************************************************
 *
 * @param formObj - data from react-hook-form
 * @param adaptor - process value, such as add a space for each 4 character, limit to maximum length
 * @param rules - check https://react-hook-form.com/docs/useform/register#options
 *
 */
export default function InputField({
  name,
  label,
  formObj,
  rules = {},
  value,
  disabled = false,
  placeholder,
  icon,
  rightIcon,
  adaptor,
  onChange = () => { },
  onBlur = () => { },
  sx,
  inputProps,
  children,
  ...rest
}: IProps) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const target: HTMLInputElement = e.target;
    // call format function
    if (adaptor) {
      const nextValue = adaptor(target.value);
      target.value = nextValue;
    }
    onChange(target.value, target.name);
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.target;
    onBlur(target.value, target.name);
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
        <section id='InputCarly' {...rest}>
          <div className="mb-2 ">
            <Label htmlFor={name} color={errorMessage ? 'failure' : 'gray'} value={label} />
          </div>

          <TextInput
            id={name}
            disabled={disabled}
            placeholder={placeholder}
            icon={icon}
            rightIcon={rightIcon}
            helperText={errorMessage || ''}
            color={errorMessage ? 'failure' : 'gray'}
            {...field}
            value={field?.value || ''}

            onBlur={handleBlur}
          />
        </section>
      )}
    />

  );
}
