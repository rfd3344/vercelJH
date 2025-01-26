import React from 'react';
import type { Metadata } from 'next';

import Note from 'src/sections/supabase/note/Note';

export const metadata: Metadata = {
  title: 'Note',
  description: 'My Notepad',
  manifest: '/manifest-note.json',
};
export default async function Page() {

  return (
    <section id="note" className='container'>

      <Note />
    </section>
  );
}
