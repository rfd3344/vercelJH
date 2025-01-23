
import React, { useState } from 'react';
import _ from 'lodash';

import { Script } from 'src/libs/next';
import { supabase } from 'src/libs/supabase';
import Button from 'src/components/navigation/Button';
import Dialog from 'src/components/modal/Dialog';
import InputField from 'src/components/inputs/InputField';
import { useForm } from 'src/hooks/useForm';

export default function LoginGoogle() {
  const [isLogin, setIsLogin] = useState(false);
  const {
    formObj,
    handleSubmit,
  } = useForm('');

  const handleSignInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3344/api/oauth/google',
        // redirectTo: 'https://lptzasniijvqdaztkxgc.supabase.co/auth/v1/callback',

      },
    });
  };


  return (
    <section id="LoginGoogle" className=''>

      <Button onClick={handleSignInWithGoogle}>LoginGoogle</Button>
      <div>
        <div id="g_id_onload"
          data-client_id="722887429418-63a6tsn332urdo5g6pjjrq1ek2qenree.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-login_uri="http://localhost:3344"
          data-auto_prompt="false">
        </div>

        <div className="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left">
        </div>
      </div>
      {/* <div>
        <div
          id="g_id_onload"
          data-client_id="722887429418-63a6tsn332urdo5g6pjjrq1ek2qenree.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="handleSignInWithGoogle"
          data-nonce=""
          data-auto_select="true"
          data-itp_support="true"
          data-use_fedcm_for_prompt="true"
        >

        </div>

        <div
          className="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        >

        </div>
      </div> */}

      <Script src="https://accounts.google.com/gsi/client" async></Script>

    </section>
  );
  // return (
  //   <section id="Login" className=''>
  //     <Button onClick={() => setIsLogin(true)}>Login</Button>
  //     <Dialog
  //       title="Login"
  //       dismissible
  //       open={isLogin}
  //       onClose={() => setIsLogin(false)}
  //     >
  //       <InputField
  //         name="email"
  //         formObj={formObj}
  //       />
  //       <InputField
  //         name="password"
  //         formObj={formObj}

  //       />
  //       <div className='flex justify-end mt-2'>
  //         <Button onClick={handleSubmit(handleLogin)}>Login</Button>

  //       </div>

  //     </Dialog>

  //   </section>
  // );
}
