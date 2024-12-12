'use client';


import {
  useGetProductListQuery,
  useGetProductByIdQuery,
} from 'src/api/vercelApi';

import ClientButtons from './ui/ClientButtons';
import PlayGround1 from './ui/PlayGround1';
import PlayGround2 from './ui/PlayGround2';
import PlayGround3 from './ui/PlayGround3';


export default function ClientDemo2() {


  return (
    <section id="ClientDemo2">
      <h3>ClientDemo2</h3>

      <ClientButtons />
      <PlayGround1 />
      <PlayGround2 />
      <PlayGround3 />



    </section>
  );
}
