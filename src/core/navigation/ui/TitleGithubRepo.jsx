'use client';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import InputField from 'src/components/inputs/InputField';

import { updateGithubRepo } from 'src/sections/githubRepo/githubRepoSlice';

export default function TitleGithubRepo() {
  const dispatch = useDispatch();
  const { repoPath = '' } = useSelector((state) => state.githubRepo);

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  const handleBlur = (value) => {
    if (repoPath === value) return;

    dispatch(updateGithubRepo({ repoPath: value }));
  };

  return (
    <div className='flex flex-wrap justify-center items-baseline'>
      <div >https://github.com/</div>
      <div >
        <InputField
          className="[&_input]:p-0"
          value={repoPath}
          onKeyUp={handleKeyUp}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
}
