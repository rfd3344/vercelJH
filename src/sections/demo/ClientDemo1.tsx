'use client';

import React, { useCallback, useState } from 'react';



const fetchApi = async () => {
  const res = await fetch('https://rfd3344.vercel.app/calculator.html');


  return res.text();
};




const debounce = (callback: any, time: number) => {
  let timerId: NodeJS.Timeout;
  return () => {
    console.log(callback);
    clearTimeout(timerId);
    timerId = setTimeout(callback, time);

  };

};

export default function ClientDemo1() {

  const [count, setCount] = useState(0);
  const [test, setTest] = useState({ a: 111 });
  const [data, setData] = useState([]);
  React.useEffect(() => {
    console.warn('tea',);
    fetchApi().then(resp => {
      setData(resp);
    });
  }, [test]);





  return (
    <section id="ClientDemo1">
      <h3>ClientDemo1</h3>
      <h1 onClick={() => setTest({ a: 1 })}>{count}</h1>
      <h3 onClick={debounce((a) => {
        setCount(count + 1);
        console.warn(a);
      }, 1000)}
      > aaaaa </h3>
      {JSON.stringify(data)}
    </section>
  );
}
