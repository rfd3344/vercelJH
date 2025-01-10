import React from 'react';
import _ from 'lodash';

import Supabase from 'src/sections/supabase/Supabase';

export default async function Page() {


  return (
    <main id="supabase" className='container'>
      <Supabase />
    </main>
  );
}
