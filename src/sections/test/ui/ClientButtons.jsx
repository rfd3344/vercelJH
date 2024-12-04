import { useState, useEffect, useMemo } from 'react';


export default function ClientButtons() {
  const handleClick = () => { };

  const handleClick2 = () => { };

  const handleClick3 = () => { };

  return (
    <div>
      <h5>ClientButtons</h5>
      <div>
        <button onClick={handleClick}>Button1</button>
        <button onClick={handleClick2}>Button2</button>
        <button onClick={handleClick3}>Button3</button>
      </div>
    </div>
  );
}
