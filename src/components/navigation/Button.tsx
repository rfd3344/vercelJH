import React from 'react';
// import {
//   ButtonProps,
//   CustomFlowbiteTheme,
//   Button as ButtonFlowbite,
// } from 'flowbite-react';
import { Button as ButtonCN } from '@shadcn/ui/button';

export default function Button({
  variant = 'default',
  ...props
}: any) {
  return (
    <ButtonCN variant={variant}
      {...props}
    />
  );
  // const theme: CustomFlowbiteTheme['button'] = {
  //   color: {
  //     primary: 'bg-cyan hover:bg-cyan/50',
  //     secondary: 'bg-salmon hover:bg-salmon/50 text-white',
  //   },
  // };

  // return (
  //   <ButtonFlowbite
  //     theme={theme}
  //     color={color}
  //     {...props}
  //   />
  // );
}
