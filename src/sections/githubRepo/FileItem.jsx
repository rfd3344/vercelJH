
import { useSelector } from 'react-redux';


import { Link, Image } from 'src/libs/next';
// import { DescriptionIcon } from 'src/core/Icons';
import Icon from 'src/components/dataDisplay/Icon';

import { getFileType } from 'src/utils/fileUtils';
import { FileTypeEnum } from 'src/constants/file-type';

import { omitRoot } from './githubRepoUtils';
import { getGithubFileUrl } from './githubRepoUtils';

export default function FileItem({
  file = {},
}) {
  const { repoPath = '' } = useSelector((state) => state.githubRepo);

  const fileRawUrl = getGithubFileUrl(repoPath, file.path);
  const fileType = getFileType(file.path);

  return (
    <div id="FileItem" className='flex flex-col items-center flex-wrap' >

      <Link target="_blank" href={fileRawUrl}>
        {fileType === FileTypeEnum.image && (
          <Image src={fileRawUrl} alt="" width={100} height={100} />
        )}
        {fileType === FileTypeEnum.pdf && (
          <Image src="/icon/pdf.png" height={50} width={50} alt="" />
        )}
        {fileType === FileTypeEnum.md && (
          <Image src="/icon/markdown.jpg" height={50} width={50} alt="" />
        )}
        {fileType === FileTypeEnum.others && (
          <Icon value='MdDescription' className='text-[50px]' />
        )}
      </Link>



      <h6 className='break-all' >
        {omitRoot(file.path)}
      </h6>

    </div>
  );
}
