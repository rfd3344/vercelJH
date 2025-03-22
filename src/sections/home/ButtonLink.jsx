import React from 'react';
import _ from 'lodash';

import { Link } from 'src/libs/next';
import { Button } from '@shadcn/ui/button';


const LinkTypes = {
  html: 'html',
  singlePage: 'singlePage',
  external: 'external',
};

const getLinkType = (to) => {
  if (_.startsWith(to, '/')) {
    if (_.endsWith(to, '.html')) return LinkTypes.html;
    return LinkTypes.singlePage;
  }
  return LinkTypes.external;
};

export default function LinkButton({ to = '', text = '', ...rest }) {
  const linkType = getLinkType(to);

  return (
    <Button
      asChild
      variant={linkType === LinkTypes.external ? 'default' : 'secondary'}

    >
      <Link href={to} className='mr-1 [&_svg]:w-4 [&_svg]:h-4'>

        <p>{text}</p>
      </Link>


    </Button>
  );
}
