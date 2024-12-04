
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';


import { updateGithubRepo } from 'src/sections/githubRepo/githubRepoSlice';

export default function TitleGithubRepo() {
  const dispatch = useDispatch();
  const { repoPath = '' } = useSelector((state) => state.githubRepo);

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (repoPath === value) return;
    dispatch(updateGithubRepo({ repoPath: value }));
  };

  return (
    <div className='flex flex-wrap justify-center'>
      <div >https://github.com/</div>
      <div >
        <input
          defaultValue={repoPath}
          onKeyUp={handleKeyUp}
          onBlur={handleChange}
        />
      </div>
    </div>
  );
}
