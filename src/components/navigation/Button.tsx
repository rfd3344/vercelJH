import React from 'react';
import {
  ButtonProps,
  CustomFlowbiteTheme,
  Button as ButtonFlowbite
} from 'flowbite-react';


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
