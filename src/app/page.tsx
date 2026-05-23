import React from 'react';
import _ from 'lodash';
import Link from 'next/link';


const AvailableLink = ({ href = '' }) => (
  <Link className='underline p-2' href={href}>{href}</Link>
);


export default function Page({ }) {

  return (
    <main id="home" className='container'>

      <h1>Available Links</h1>

      <AvailableLink href="/github-repo" />


    </main>
  );
}
