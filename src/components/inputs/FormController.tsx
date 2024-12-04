import { ReactNode, ChangeEvent } from 'react';
import _ from 'lodash';
import { Controller } from 'react-hook-form';

import { useForm } from 'src/hooks/useForm';


interface IProps {
  name?: string;
  label?: ReactNode;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

export default function FormContoller({
  name = '',
  label,
  rules,
  formObj,
  value = '',
  onChange,
  render,
  ...rest
}: IProps) {
  const displayLabel = _.isString(label) ? label : _.startCase(name);

  const controllerName = name || 'mock';
  const mockForm = useForm({ [controllerName]: value });

  return (
    <Controller
      name={controllerName}
      rules={rules}
      control={formObj?.control || mockForm.formObj.control}
      render={({ field }) => render({
        ...field,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
          field.onChange(e);
        },
        value: field.value || '',
        label: displayLabel,
        errorMessage: formObj?.errors?.[controllerName]?.message,
      })}
      {...rest}
    />
  );
}
