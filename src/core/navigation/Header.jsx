'use client';
import React from 'react';
import _ from 'lodash';
import { usePathname } from 'src/libs/next';

import { Link } from 'src/components/next';
import { Avatar } from 'src/components/flowbite';

import { PagePath } from 'src/constants/pagePath';

import Clock from './ui/Clock';
import NavTitle from './ui/NavTitle';

export default function Header() {
  const pathname = usePathname();

  if (pathname === PagePath.test) return null;

  return (
    <header className='bg-cyan px-2'>
      <section className='container flex justify-between items-center pt-1'>
        <div className=''>
          <Clock />
        </div>
        <div className='flex-1'>
          <NavTitle />
        </div>
        <div className=''>
          <Link href="/">
            <Avatar rounded img="./image/zhongli3.jpg" />

          </Link>

        </div>

      </section>
    </header>
  );

}
