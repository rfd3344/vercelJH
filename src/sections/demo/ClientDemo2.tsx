'use client';


import {
  useGetDemoQuery,
} from 'src/query/expressQuery';

import ClientButtons from './ui/ClientButtons';
import PlayGround1 from './ui/PlayGround1';
import PlayGround2 from './ui/PlayGround2';
import PlayGround3 from './ui/PlayGround3';


export default function ClientDemo2() {

  const { data } = useGetDemoQuery();
  console.warn('data', data);
  return (
    <section id="ClientDemo2">
      <h3>ClientDemo2</h3>
      {JSON.stringify(data)}
      <ClientButtons />
      <PlayGround1 />
      <PlayGround2 />
      <PlayGround3 />



    </section>
  );
}
