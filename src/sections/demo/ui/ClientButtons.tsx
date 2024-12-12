import { useState, useEffect, useMemo } from 'react';


import Button from 'src/components/navigation/Button';


export default function ClientButtons() {
  const handleClick = () => { };

  const handleClick2 = () => { };

  const handleClick3 = () => { };

  return (
    <div>
      <h4>ClientButtons</h4>
      <div className='flex gap-x-4'>
        <Button onClick={handleClick}>Button1</Button>
        <Button onClick={handleClick2}>Button2</Button>
        <Button onClick={handleClick3}>Button3</Button>
      </div>
    </div>
  );
}
