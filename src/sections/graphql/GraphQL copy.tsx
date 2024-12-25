'use client';

import React, { useCallback, useLayoutEffect, useState } from 'react';

import { useQuery, gql } from '@apollo/client';


const GET_USER = gql`
query {
  posts(options: { paginate: { page: 1, limit: 5 } }) {
  data {
      id
      title
    }
    meta {
      totalCount
    }
  }
  user(id: 1) {
    id
    username
    email
    address {
      geo {
        lat
        lng
      }
    }
  }
}

`;

export default function GraphQL() {

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="GraphQL">
      <pre>
        {JSON.stringify(data, null, ' ')}

      </pre>
    </section>
  );

}
