
'use client';
import React from 'react';
import _ from 'lodash';

import { useRouter } from 'src/libs/next';

export default function URLAction() {
  const router = useRouter();

  const handleSubmit = (data) => {
    const url = data.get("url");
    router.push(url);
  };

  return (
    <div id="InputLink" >
      <form action={handleSubmit}>
        <input
          name="url"
          defaultValue="https://www.google.com/"
          style={{
            border: '3px solid',
            margin: 5,
            minWidth: 250,
          }}
        />
        <button type="submit" style={{ background: 'DodgerBlue', padding: 7 }}>Navigate</button>
      </form>
    </div>
  );
}
