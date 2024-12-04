'use client';

import _ from 'lodash';


import { deleteCat } from 'src/api/mongo';

export default function CatList({ cats = [] }) {
  const handleDelete = (doc) => {
    deleteCat(doc);
  };

  return (
    <div >
      {cats.map((item) => (
        <div item key={item._id} xs={12}>
          <div container>
            <div>{item.name}</div>
            <div>{item.age} </div>
            <div>{item.color} </div>
            <button onClick={() => handleDelete(item)}> delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
