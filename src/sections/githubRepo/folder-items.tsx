
import _ from 'lodash';

import { Flex } from 'src/components/atoms/flex';
import { FileItem } from './file-item';

export function FolderItems({
  folderFiles
}: any) {


  return (
    <Flex gap={8}>
      {folderFiles.map((file: any) => (
        <FileItem key={file.path} file={file} />

      ))}
    </Flex>
  );
}
