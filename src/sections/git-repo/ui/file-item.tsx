
import _ from 'lodash';


import { Link, Image } from 'src/libs/next';

import { getGithubRawUrl, getGithubPreviewUrl, omitRoot, PDF_VIEWER_URL } from '../github-repo.utils';





export function FileItem({
  file = {},
  repoPath = '',
}: any) {
  const filePath = file.path;
  const fileExtension = _.lowerCase(filePath.split('.').pop());
  const displayName = omitRoot(filePath);
  const rawUrl = getGithubRawUrl(repoPath, filePath);


  const renderPreview = () => {
    switch (fileExtension) {
      case 'pdf':
        return <Link href={PDF_VIEWER_URL + encodeURIComponent(rawUrl)} target="_blank">📕</Link>;
      case 'md':
        return <Link href={getGithubPreviewUrl(repoPath, filePath)} target="_blank">Ⓜ️</Link>;
      case 'jpg':
      case 'jpeg':
      case 'png':
        return (
          <Link href={rawUrl} target="_blank" >
            <Image
              src={rawUrl}
              alt=""
              className="h-full w-auto m-auto"
              width={50}
              height={50}
              loading="lazy"
            />
          </Link>
        )
      default:
        return <Link href={rawUrl} target="_blank">📄</Link>
    }
  }


  return (
    <div id="FileItem" className='text-center' >

      <div className='text-5xl'>
        {renderPreview()}
      </div>

      <p className='break-all'>
        {displayName}
      </p>

    </div>
  );
}
