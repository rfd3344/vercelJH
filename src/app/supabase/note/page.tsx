import React from 'react';
import type { Metadata } from 'next';

import Note from 'src/sections/supabase/note/Note';

export const metadata: Metadata = {
  title: 'Note',
  description: 'My notepad',

};
export default async function Page() {

  return (
    <section id="note" className='container'>
      <link
        rel="icon"
        href="/image/write.jpg"
        type="image/jpg"
        sizes="jpg"
      />
      <Note />
    </section>
  );
}
