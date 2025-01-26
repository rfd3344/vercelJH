import React from 'react';
import _ from 'lodash';

import { Link } from 'src/libs/next';
// import Button from 'src/components/navigation/Button';
import { Button } from '@shadcn/ui/button';

import { PagePath } from 'src/constants/pagePath';
// import {
//   CalculateIcon,
//   ColorIcon,
//   GitHubIcon,
//   NoteIcon,
//   DriveIcon,
//   ImageFolderIcon,
//   OpenInNewIcon,
//   MessageImgIcon,
// } from 'src/core/Icons';
import Icon from 'src/components/dataDisplay/Icon';

import ImgIcon from './ImgIcon';

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
  const StartIcon = (props) => {


    if (_.includes(to, 'keep.google.com')) return <Icon value='PiNotePencilBold' {...props} />;
    if (_.includes(to, 'drive.google.com')) return <Icon value='FaGoogleDrive' {...props} />;
    if (_.includes(to, 'github.com')) return <Icon value='FaGithub' {...props} />;
    if (_.includes(to, 'aws')) return <ImgIcon src="/icons/aws.png" {...props} />;
    if (_.includes(to, 'messenger.com')) return <Icon value='MdOutlineMessage' {...props} />;
    if (_.includes(to, 'rfd3344w.github.io'))
      return <ImgIcon src="/icons/storybook.png"  {...props} />;
    if (linkType === LinkTypes.external) return <Icon value='MdOpenInNew' {...props} />;
    if (to === PagePath.calculator) return <Icon value='MdOutlineCalculate' {...props} />;
    if (to === PagePath.localNotes) return <Icon value='PiNotePencilBold'  {...props} />;
    if (to === PagePath.colorTable) return <Icon value='IoIosColorPalette' {...props} />;
    if (to === PagePath.repo) return <Icon value='FaRegImages' {...props} />;
    return null;
  };

  return (
    <Button
      // as={Link}
      // href={to}
      // size="sm"
      asChild
      variant={linkType === LinkTypes.external ? 'default' : 'secondary'}

    // variants={'primary' }
    >
      <Link href={to} className='mr-1 [&_svg]:w-4 [&_svg]:h-4'>
        <StartIcon className="translate-y-0" />
        <p>{text}</p>
      </Link>


    </Button>
  );
}
