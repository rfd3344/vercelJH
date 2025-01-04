import React from 'react';
import {
  Spinner as SpinnerFlowbite,
  SpinnerProps,
  CustomFlowbiteTheme,
} from 'flowbite-react';


export default function IconSpinner({
  className = '',
  color='cyan',
  ...rest
}: SpinnerProps) {



  const theme: CustomFlowbiteTheme['spinner'] = {
    color: {
      cyan: 'fill-cyan',
      salmon: 'fill-salmon',
    },
  };

  return (
    <SpinnerFlowbite
      className={className}
      theme={theme}
      color={color}
      {...rest}
    />

  );
}
