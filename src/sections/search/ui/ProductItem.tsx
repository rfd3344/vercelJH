
'use client';

import React, { useState } from 'react';




export function ProductItem({
  data = {},
}: any) {
  // console.warn('data', data)


  return (
    <section>
      {data}
      test
    </section>
  );

}


export default ProductItem;
// export default React.memo(ProductItem)
