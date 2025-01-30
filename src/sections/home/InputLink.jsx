
'use client';
import React from 'react';
import _ from 'lodash';


export default function URLAction() {

  const handleSubmit = (data) => {
    const url = data.get("url");
    console.warn(data.get("url"));
  };

  return (
    <div id="InputLink" >
      <form action={handleSubmit}>
        <input
          name="url"
          defaultValue="https://www.google.com/"
          style={{
            border: '3px solid',
            margin: 10,
            minWidth: 300,
          }}
        />
        <button type="submit" style={{ background: 'DodgerBlue', padding: 5 }}>Reach</button>
      </form>
    </div>
  );
}
