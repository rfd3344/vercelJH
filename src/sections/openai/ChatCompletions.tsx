'use client';

import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import Button from 'src/components/navigation/Button';



import { example } from 'src/libs/openai';

export default function ChatCompletions() {

  // const handleChatCompletions = () => {
  //   example().then(resp => {
  //     console.warn('resp', resp);
  //   });
  // };

  const handlePostChat = () => {

  };

  return (
    <section id="ChatCompletions">
      ChatCompletions

      {/* <Button onClick={handleChatCompletions}> ChatCompletions</Button> */}
      <Button onClick={handlePostChat}> Post Chat</Button>
    </section>
  );

}
