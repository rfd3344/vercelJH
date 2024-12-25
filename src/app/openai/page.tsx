import React from 'react';


import ChatCompletions from 'src/sections/openai/ChatCompletions';


import { example } from 'src/libs/openai';
export default async function Page() {
  // const resp =  await example();
  // console.warn(resp);
  return (
    <main id="openai" className='container'>
      <ChatCompletions />

    </main>
  );
}
