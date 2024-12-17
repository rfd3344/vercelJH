
import React from 'react';

import ReactMarkdownLib, { Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';



export default function ReactMarkdown(props: Options) {


  return (
    <section id="ReactMarkdown" >

      <ReactMarkdownLib
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        {...props}
      />
    </section>
  );
}
