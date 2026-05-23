import { useSelector } from 'react-redux';
import _ from 'lodash';


import { Link, Image } from 'src/libs/next';
// import { DescriptionIcon } from 'src/core/Icons';
// import Icon from 'src/components2/dataDisplay/Icon';

// import { getFileType } from 'src/utils/fileUtils';
// import { FileTypeEnum } from 'src/constants/file-type';

import { getGithubFileUrl, omitRoot } from './githubRepoUtils';


export enum FileTypeEnum {
  IMAGE = 'IMAGE',
  PDF = 'PDF',
  MD = 'MD',
  OTHERS = 'OTHERS',
}

export const getFileType = (filepath = '') => {
  const fileExtension = _.lowerCase(filepath.split('.').pop());

  switch (fileExtension) {
    case 'pdf':
      return '📕 ';
    case 'md':
      return 'Ⓜ️';
    case 'jpg':
    case 'jpeg':
    case 'png':
      return '🖼️';
    default:
      return '📄';
  }
  // if (fileExtension === 'pdf') return '📕 ';
  // if (fileExtension === 'md') return 'Ⓜ️';
  // if (['jpg', 'jpeg', 'png'].includes(fileExtension)) return '🖼️';


  // return '📄';

};


export function FileItem({
  file = {},
}: any) {
  // const { repoPath = '' } = useSelector((state) => state.githubRepo);

  const fileRawUrl = getGithubFileUrl('', file.path);
  // const fileType = getFileType(file.path);


  return (
    <div id="FileItem" className='flex flex-col items-center flex-wrap' >
      <div className='text-5xl'>
        {getFileType(file.path)}
      </div>
      {/* <Link target="_blank" href={'#'}>

      </Link> */}

      {/* {fileType === FileTypeEnum.IMAGE && (
        <Image src={fileRawUrl} alt="" width={100} height={100} />
      )}
      {fileType === FileTypeEnum.PDF && (
        <Image src="/icon/pdf.png" height={50} width={50} alt="" />
      )}
      {fileType === FileTypeEnum.MD && (
        <Image src="/icon/markdown.jpg" height={50} width={50} alt="" />
      )}
      {fileType === FileTypeEnum.OTHERS && (
        <Image src="/icon/file.png" height={50} width={50} alt="" />
      )} */}
      <p >
        {omitRoot(file.path)}
      </p>

    </div>
  );
}
