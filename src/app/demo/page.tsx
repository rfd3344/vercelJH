import { ServerDemo } from './server-demo';

import { ClientDemo1 } from 'src/sections/demo/client-demo1';
import { ClientDemo2 } from 'src/sections/demo/client-demo2';


export default async function Page() {


  return (
    <main id="demo">

      <ServerDemo />
      <ClientDemo1 />
      <ClientDemo2 />
    </main>
  );
}
