'use client';
import React from 'react';
import _ from 'lodash';
// import { Avatar } from 'flowbite-react';

// import { usePathname } from 'src/libs/next';
// import { Link } from 'src/libs/next';
// import { PagePath } from 'src/constants/page-path';

import Clock from './ui/Clock';
import NavTitle from './ui/NavTitle';

export default function Header() {
  // const pathname = usePathname();

  // if (pathname === PagePath.demo) return <header />;

  return (
    <header id="Header" className='bg-primary px-2'>
      <section className='container flex justify-between items-center pt-1'>

      </section>
    </header >
  );

}
