'use client';

import _ from 'lodash';

import { createCat } from 'src/api/mongo';

export default function CatActions() {
  const handleClick = async () => {
    const resp = await createCat({
      name: `cat_${  Date()}`,
      age: 10,
      color: 'red',
    });

    console.warn('resp', resp);
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Create</button>
        jhghjhjghj
      </div>
    </div>
  );
}
