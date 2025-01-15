
import React, { useState } from 'react';
import _ from 'lodash';

import { supabase } from 'src/libs/supabase';
import Button from 'src/components/navigation/Button';
import Dialog from 'src/components/modal/Dialog';
import InputField from 'src/components/inputs/InputField';
import { useForm } from 'src/hooks/useForm';

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const {
    formObj,
    handleSubmit,
  } = useForm('');

  const handleLogin = () => {
    supabase.auth.signInWithPassword({
      email: 'rfd3344w@gmail.com',
      password: 'Qwe123456!',
    }).then(resp => {
      console.warn(resp);
      setIsLogin(false);
    });
  };

  return (
    <section id="Login" className=''>
      <Button onClick={() => setIsLogin(true)}>Login</Button>
      <Dialog
        title="Login"
        dismissible
        open={isLogin}
        onClose={() => setIsLogin(false)}
      >
        <InputField
          name="email"
          formObj={formObj}
        />
        <InputField
          name="password"
          formObj={formObj}

        />
        <div className='flex justify-end mt-2'>
          <Button onClick={handleSubmit(handleLogin)}>Login</Button>

        </div>

      </Dialog>

    </section>
  );
}
