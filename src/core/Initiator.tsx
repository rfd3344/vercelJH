'use client';

import { useEffect, useRef } from 'react';


import { addDevFunctions } from 'src/utils/dev.utils';

export default function Initiator() {
  const isInitiated = useRef(false);


  useEffect(() => {
    if (isInitiated.current) return;
    isInitiated.current = true;

    addDevFunctions();
  }, []);

  return null;
}
