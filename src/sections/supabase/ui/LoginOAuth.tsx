
import React, { useState } from 'react';
import _ from 'lodash';

import { Script } from 'src/libs/next';
import { supabase } from 'src/libs/supabase';
import Button from 'src/components/navigation/Button';
import Dialog from 'src/components/modal/Dialog';
import InputField from 'src/components/inputs/InputField';
import { useForm } from 'src/hooks/useForm';

export default function LoginOAuth() {
  const handleLogin = (provider: any = '') => {
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        // skipBrowserRedirect: true,
        redirectTo: 'http://localhost:3344/supabase',
        // redirectTo: 'http://localhost:3344/api/oauth/google',
        // redirectTo: 'https://lptzasniijvqdaztkxgc.supabase.co/auth/v1/callback',
        // skipBrowserRedirect: true,
        // queryParams: {
        //   access_type: 'offline',
        //   prompt: 'consent',
        // },
      },
    });
  };

  return (
    <section id="LoginOAuth" className=''>

      <Button color="secondary" onClick={() => handleLogin('google')}>LoginGoogle</Button>

      <Button color="secondary" onClick={() => handleLogin('facebook')}>LoginFacebook</Button>

    </section>
  );
}