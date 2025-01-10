'use client';

import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import Button from 'src/components/navigation/Button';
import InputField from 'src/components/inputs/InputField';

import { example, openAiChat } from 'src/libs/openai';

import ChatAccordion from './ChatAccordion';

export default function ChatCompletions() {
  const [input, setInput] = useState('');
  const [chats, setChats] = useState<any>([]);

  const handleInputChange = (value = '') => {
    setInput(value);
  };

  const handleChat = async () => {


    setInput('');
    const resp = await openAiChat([
      { 'role': 'user', 'content': input },
    ]);

    setChats([
      {
        question: input,
        result: resp.choices[0].message.content,
      },
      ...chats,
    ]);
  };

  return (
    <section id="ChatCompletions">
      ChatCompletions

      <div className='flex items-baseline gap-2'>
        <div className='flex-1'>
          <InputField
            // name="input"
            // label=""
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button
            disabled={!input}
            onClick={handleChat}
          > Send</Button>
        </div>

      </div>

      <ChatAccordion chats={chats} />

    </section>
  );

}
