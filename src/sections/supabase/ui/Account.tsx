
import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import { supabase } from 'src/libs/supabase';
import Button from 'src/components/navigation/Button';

import Login from './Login';
import Signup from './Signup';

export default function Account() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    supabase.auth.getUser().then((resp: any) => {
      console.warn('resp?.data.user', resp?.data.user);
      setUser(resp?.data.user || null);
    });
  }, []);

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  return (
    <section id="Account" className='mt-2'>
      <div className='flex items-center justify-between'>
        <div>

          {user?.email}
        </div>
        <div className='flex gap-2'>
          <Login />
          <Signup />
          <Button onClick={handleLogout}>Logout</Button>
        </div>

      </div>

    </section>
  );
}
