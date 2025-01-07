'use client';

import React from 'react';


import UserPosts from './AllPosts';
import Users from './Users';

export default function GraphQL() {

  return (
    <section id="GraphQL" className='mt-2'>

      <UserPosts />

      <Users />
    </section>
  );

}
