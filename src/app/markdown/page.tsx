'use client';

import React, { useState, useEffect, Suspense } from 'react';

import { useSearchParams } from 'src/libs/next';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  CalculateIcon,
  ColorIcon,
  GitHubIcon,
  NoteIcon,
  DriveIcon,
  ImageFolderIcon,
  OpenInNewIcon,
  MessageImgIcon,
} from 'src/core/Icons';
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
    <section id="Markdown" className='container  break-all'>
      <div>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          components={{
            h1: ({ node, ...props }) => <h2 className='text-center' style={{ color: 'red' }} {...props} />,
            h2: ({ node, ...props }) => <h3 className="my-2 border-b-2" style={{ color: '#49aac5' }}  {...props} />,
            h3: ({ node, ...props }) => <h4 className="my-2 pl-2" style={{ color: '#ffa500' }} {...props} />,
            h4: ({ node, ...props }) => <h5 className="my-2 pl-2" style={{ color: 'green' }} {...props} />,
            ul: ({ node, ...props }) => <ul role="list" className=" list-disc pl-6" {...props} />,
            ol: ({ node, ...props }) => <ul role="list" className="  list-decimal pl-4" {...props} />,

            code: ({ node, ...props }) => <code className='px-1' style={{ background: 'lightgray' }} {...props} />,
            pre: ({ node, ...props }) => <pre className='pl-2 my-2 border-l-4 border-green-500 overflow-x-auto max-w-[calc(100vw-15px)]' style={{ background: 'lightgray' }} {...props} />,
            blockquote: ({ node, ...props }) => <blockquote className='px-2 border-l-8 border-indigo-500 font-bold my-2' style={{ background: 'whitesmoke' }} {...props} />,
            a: ({ node, children, ...props }) => <span >{children} <a {...props} target='_blank'><OpenInNewIcon /></a></span>,
          }}

        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
}
