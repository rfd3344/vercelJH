'use client';
import { useState, useEffect } from 'react';
import _ from 'lodash';

import Icon from 'src/components/dataDisplay/Icon';

import { Badge } from 'src/components/flowbite';

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(
    new Date('2000/01/01 12:34:56'),
  );

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const timer = () => setCurrentTime(new Date());
    setInterval(timer, 1000);
    return clearInterval(timer);
  }, []);

  return (
    <div className='text-center'>

      <Badge
        color="warning"
        onClick={handleClick}
      >
        <div className='flex gap-2'>
          <Icon value='FaCalendarAlt' />
          <p> {currentTime?.toDateString()} </p>
        </div>

      </Badge>

      <h5>
        {currentTime?.toLocaleTimeString('en-US')}
      </h5>

    </div>
  );
}
