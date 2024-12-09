import React from 'react';
import {
  Spinner as SpinnerFlowbite,
  SpinnerProps,
  CustomFlowbiteTheme,
} from 'flowbite-react';


export default function IconSpinner({
  className = '',
  ...rest
}: SpinnerProps) {



  const theme: CustomFlowbiteTheme['spinner'] = {
    color: {
      info: 'fill-primary',
    },
  };

  return (
    <SpinnerFlowbite
      className={className}
      theme={theme}
      {...rest}
    />

  );
}
