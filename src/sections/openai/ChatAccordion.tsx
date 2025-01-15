'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import Accordion from 'src/components/dataDisplay/Accordion';

import ReactMarkdown from 'src/libs/ReactMarkdown';
import Icon from 'src/components/dataDisplay/Icon';

export default function ChatAccordion({ chats = [] }) {

  const data = chats.map((item: any) => ({
    summary: item.question,
    details: <ReactMarkdown
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
    </ReactMarkdown>,
  }));


  return (
    <section id="ChatAccordion" className='mt-2'>
      <Accordion

        data={data}
      />
    </section>
  );
}
