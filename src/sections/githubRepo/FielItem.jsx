
import { useSelector } from 'react-redux';


import { Link } from 'src/components/next';
import { Image } from 'src/components/next';
// import { DescriptionIcon } from 'src/core/Icons';
import Icon from 'src/components/dataDisplay/Icon';

import { getFileTyle } from 'src/utils/fileUtils';
import { FileTypeEnum } from 'src/constants/fileConst';

import { omitRoot } from './githubRepoUtils';
import { getGithubFileUrl } from './githubRepoUtils';

export default function FielItem({
  file = {},
}) {
  const { repoPath = '' } = useSelector((state) => state.githubRepo);

  const fileRawUrl = getGithubFileUrl(repoPath, file.path);
  const fileType = getFileTyle(file.path);

  return (
    <div id="FielItem" className='flex flex-col items-center flex-wrap' >

      <Link target="_blank" href={fileRawUrl}>
        {fileType === FileTypeEnum.image && (
          <Image src={fileRawUrl} alt="" width={100} height={100} />
        )}
        {fileType === FileTypeEnum.pdf && (
          <Image src="/icons/pdf.png" height={50} width={50} alt="" />
        )}
        {fileType === FileTypeEnum.md && (
          <Image src="/icons/markdown.jpg" height={50} width={50} alt="" />
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
