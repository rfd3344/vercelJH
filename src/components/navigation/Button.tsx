import React from 'react';
import { ButtonProps, CustomFlowbiteTheme } from 'flowbite-react';

import { Button as ButtonFlowbite } from 'src/components/flowbite';

export default function Button({
  color = 'primary',
  ...props
}: ButtonProps) {
  const theme: CustomFlowbiteTheme['button'] = {
    color: {
      primary: 'bg-cyan hover:bg-cyan/50',
      secondary: 'bg-salmon hover:bg-salmon/50 text-white',
    },
  };

  return (
    <ButtonFlowbite
      theme={theme}
      color={color}
      {...props}
    />
  );
}
