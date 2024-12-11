'use client';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';


export default function BlogItem({
  data = {},
}: any) {


  return (
    <section id="BlogItem">

      <h5>
        id: <b> {data._id}  </b>
        title: <b> {data.title} </b>
        subtitle: <b> {data.subtitle} </b>
        publishedAt: <b> {data.publishedAt} </b>
        link: <b><u> <a href={`/blog/${data.slug?.current}`}>{data.slug?.current}</a></u></b>
      </h5>

    </section>
  );
}
