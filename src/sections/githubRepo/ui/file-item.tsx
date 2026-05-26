
import _ from 'lodash';


import { Link, Image } from 'src/libs/next';

import { getStaticJHUrl, omitRoot } from '../github-repo.utils';


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

      return <Image src={getStaticJHUrl(filepath)} alt="" width={100} height={100} className="h-full w-auto m-auto" />

    default:
      return '📄';
  }

};


export function FileItem({
  file = {},
}: any) {

  return (
    <div id="FileItem" className='text-center' >
      <Link href={getStaticJHUrl(file.path)} target="_blank" rel="noopener noreferrer">
        <div className='text-5xl'>
          {getFileType(file.path)}
        </div>

        <p >
          {omitRoot(file.path)}
        </p>
      </Link>


    </div>
  );
}
