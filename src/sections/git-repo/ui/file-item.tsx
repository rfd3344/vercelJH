
import _ from 'lodash';


import { Link, Image } from 'src/libs/next';

import { getGithubRawUrl, omitRoot } from '../github-repo.utils';


// export enum FileTypeEnum {
//   IMAGE = 'IMAGE',
//   PDF = 'PDF',
//   MD = 'MD',
//   OTHERS = 'OTHERS',
// }

const getFileType = (repo = '', filepath = '') => {
  const fileExtension = _.lowerCase(filepath.split('.').pop());

  switch (fileExtension) {
    case 'pdf':
      return '📕 ';
    case 'md':
      return 'Ⓜ️';
    case 'jpg':
    case 'jpeg':
    case 'png':

      return <Image src={getGithubRawUrl(repo, filepath)}
        alt=""
        className="h-full w-auto m-auto"
        width={50}
        height={50}
        loading="lazy"
      />

    default:
      return '📄';
  }

};


export function FileItem({
  file = {},
  repoPath = '',
}: any) {

  return (
    <div id="FileItem" className='text-center' >
      <Link href={getGithubRawUrl(repoPath, file.path)} target="_blank" rel="noopener noreferrer">
        <div className='text-5xl'>
          {getFileType(repoPath, file.path)}
        </div>

        <p>
          {omitRoot(file.path)}
        </p>
      </Link>


    </div>
  );
}
