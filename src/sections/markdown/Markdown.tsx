'use client';

import React, { useState, useEffect } from 'react';

import { useSearchParams } from 'src/libs/next';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'src/components/dataDisplay/Icon';

import ReactMarkdown from 'src/libs/ReactMarkdown';

import Typography from 'src/components/dataDisplay/typography';

export default function Page({ }) {
  const searchParams = useSearchParams();

  const { selectFile } = useSelector((state: any) => state.markdown);
  const [content, setContent] = useState('');

  useEffect(() => {
    const name = searchParams.get('name');

    if (!name) return;
    const contentPath = `/markdown/${name}`;
    fetch(contentPath)
      .then((resp) => resp.text())
      .then((text) => setContent(text));
  }, [selectFile, searchParams]);

  return (
    <section id="Markdown" className='container break-all'>

      <ReactMarkdown
        components={{
          h1: ({ node, ...props }: any) => <Typography variant='h2' className='text-center' style={{ color: 'red' }} {...props} />,
          h2: ({ node, ...props }: any) => <Typography variant='h3' className="my-2 border-b-2" style={{ color: '#49aac5' }}  {...props} />,
          h3: ({ node, ...props }: any) => <Typography variant='h4' className="my-2 pl-2" style={{ color: '#ffa500' }} {...props} />,
          h4: ({ node, ...props }: any) => <Typography variant='h5' className="my-2 pl-2" style={{ color: 'green' }} {...props} />,
          ul: ({ node, ...props }: any) => <ul role="list" className=" list-disc pl-6" {...props} />,
          ol: ({ node, ...props }: any) => <ul role="list" className="  list-decimal pl-4" {...props} />,

          code: ({ node, ...props }: any) => <code className='px-1' style={{ background: 'lightgray' }} {...props} />,
          pre: ({ node, ...props }: any) => <pre className='pl-2 my-2 border-l-4 border-green-500 overflow-x-auto max-w-[calc(100vw-15px)]' style={{ background: 'lightgray' }} {...props} />,
          blockquote: ({ node, ...props }: any) => <blockquote className='px-2 border-l-8 border-indigo-500 font-bold my-2' style={{ background: 'whitesmoke' }} {...props} />,
          a: ({ node, children, ...props }: any) => <span >{children} <a {...props} target='_blank'><Icon value='FcLink' size='xl' className='inline' /></a></span>,
        }}
      >
        {content}
      </ReactMarkdown>

    </section>
  );
}
