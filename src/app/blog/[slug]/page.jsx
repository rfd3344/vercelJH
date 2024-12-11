
import React from 'react';

import { PortableText } from '@portabletext/react';
import { Image } from 'src/components/next';

import { getBlogBySlug, getSanityImage } from 'src/libs/sanity';


export const revalidate = 60;

export default async function Page({ params }) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <main id="blog-slug" className='container'>

      <Image src={getSanityImage(blog.mainImage)} width="500" height="200" alt="" />
      <PortableText value={blog.body} />
      <pre>
        {JSON.stringify(blog, null, 2)}
      </pre>
    </main >
  );
}
