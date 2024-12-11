'use client';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { getBlogList } from 'src/libs/sanity';

import BlogItem from './BlogItem';


export default function ClientSection() {
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    getBlogList()?.then((resp: any) => {

      setBlogs(resp);
    });
  }, []);


  return (
    <section id="BlogList">
      <h3> client blog</h3>
      {blogs.map((item: any) => (
        <BlogItem
          key={item._id}
          data={item}
        />
      ))}

    </section>
  );
}
