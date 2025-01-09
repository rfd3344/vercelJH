'use client';

import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import Button from 'src/components/navigation/Button';

import calculator from './data/calculator.json';

import { example, openAiChat } from 'src/libs/openai';

import ReactMarkdown from 'src/libs/ReactMarkdown';
import Icon from 'src/components/dataDisplay/Icon';

export default function ChatCompletions() {
  const [chats, setChats] = useState<any>([]);

  useEffect(() => {
    setChats([...chats, {
      question: 'write a calculator in javascript',
      result: calculator.choices[0].message.content,
    }]);
  }, []);

  const handleChatCompletions = () => {
    example().then(resp => {
      console.warn('resp', resp);
    });

  };

  const handlePostChat = async () => {
    const resp = await openAiChat([
      { 'role': 'user', 'content': 'write a calculator in javascript' },
    ]);
    console.warn('resp', resp);
  };

  return (
    <section id="ChatCompletions">
      ChatCompletions

      <Button onClick={handleChatCompletions}> ChatCompletions</Button>
      <Button onClick={handlePostChat}> Post Chat</Button>

      {chats.map((item: any, key = 0) => (
        <div key={key}>
          <h5>{item.question}</h5>

          <div>

            <ReactMarkdown
              components={{
                h1: ({ node, ...props }: any) => <h2 className='text-center' style={{ color: 'red' }} {...props} />,
                h2: ({ node, ...props }: any) => <h3 className="my-2 border-b-2" style={{ color: '#49aac5' }}  {...props} />,
                h3: ({ node, ...props }: any) => <h4 className="my-2 pl-2" style={{ color: '#ffa500' }} {...props} />,
                h4: ({ node, ...props }: any) => <h5 className="my-2 pl-2" style={{ color: 'green' }} {...props} />,
                ul: ({ node, ...props }: any) => <ul role="list" className=" list-disc pl-6" {...props} />,
                ol: ({ node, ...props }: any) => <ul role="list" className="  list-decimal pl-4" {...props} />,

                code: ({ node, ...props }: any) => <code className='px-1' style={{ background: 'lightgray' }} {...props} />,
                pre: ({ node, ...props }: any) => <pre className='pl-2 my-2 border-l-4 border-green-500 overflow-x-auto max-w-[calc(100vw-15px)]' style={{ background: 'lightgray' }} {...props} />,
                blockquote: ({ node, ...props }: any) => <blockquote className='px-2 border-l-8 border-indigo-500 font-bold my-2' style={{ background: 'whitesmoke' }} {...props} />,
                a: ({ node, children, ...props }: any) => <span >{children} <a {...props} target='_blank'><Icon value='FcLink' size='xl' className='inline' /></a></span>,
              }}
            >
              {item.result}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </section>
  );

}
