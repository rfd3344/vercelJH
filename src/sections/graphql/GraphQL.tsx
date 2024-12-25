'use client';

import React, { useCallback, useLayoutEffect, useState } from 'react';

import { useQuery } from 'src/libs/apollo';
import {
  GET_USERS,
  GET_USER,
} from './query';

export default function GraphQL() {

  const { loading, error, data } = useQuery(GET_USERS, {
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
