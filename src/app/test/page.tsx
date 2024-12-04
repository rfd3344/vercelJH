import React, { useState, useEffect } from 'react';


import PlayGround1 from './PlayGround1';
import PlayGround2 from './PlayGround2';

import ClientTest from 'src/sections/test/ClientTest';

export default async function Page() {
  return (
    <section>
      <PlayGround1 />
      <PlayGround2 />
      <ClientTest />
    </section>
  );
}
