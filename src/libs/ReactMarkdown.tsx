
import React from 'react';

import ReactMarkdwonLib, { Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';



export default function ReactMarkdown(props: Options) {


  return (
    <section id="ReactMarkdown" >

      <ReactMarkdwonLib
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        {...props}
      />
    </section>
  );
}
