import React from 'react';
import _ from 'lodash';

import { Link } from 'src/components/next';
import Button from 'src/components/navigation/Button';

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
  const StartIcon = () => {
    if (_.includes(to, 'keep.google.com')) return <Icon />;
    if (_.includes(to, 'drive.google.com')) return <Icon />;
    if (_.includes(to, 'github.com')) return <Icon />;
    if (_.includes(to, 'aws')) return <ImgIcon src="/icons/aws.png" />;
    if (_.includes(to, 'messenger.com')) return <Icon />;
    if (_.includes(to, 'rfd3344w.github.io'))
      return <ImgIcon src="/icons/storybook.png" />;
    if (linkType === LinkTypes.external) return <Icon />;
    if (to === PagePath.calculator) return <Icon />;
    if (to === PagePath.tempNotes) return <Icon />;
    if (to === PagePath.colorTable) return <Icon />;
    if (to === PagePath.repo) return <Icon />;
    return null;
  };

  return (
    <Button
      as={Link}
      href={to}
      size="sm"
      color={linkType === LinkTypes.external ? 'primary' : 'secondary'}

    >
      <div className='mr-1 [&_svg]:w-4 [&_svg]:h-4'>
        <Icon />
      </div>
      <div>{text}</div>
    </Button>
  );
}
