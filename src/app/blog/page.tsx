import React from 'react';


import { getBlogList } from 'src/libs/sanity';
import BlogList from 'src/sections/blog/BlogList';
import BlogItem from 'src/sections/blog/BlogItem';

// export const dynamic = 'force-static';
// export const dynamic = 'force-dynamic';
// export const dynamicParams = false;
export const revalidate = 60;


export default async function Page() {

  const blogs = await getBlogList();


  return (
    <main id="blog" className='container'>

      <h3> blog</h3>
      {blogs.map((item: any) => (
        <BlogItem
          key={item._id}
          data={item}
        />
      ))}

      <BlogList />

    </main >
  );
}
