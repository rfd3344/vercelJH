'use client';
import { useSelector, useDispatch } from 'react-redux';

import { updateWebpage } from 'src/sections/webpage/webpageSlice';

export default function Page() {
  const dispatch = useDispatch();
  const {
    size = 30,
    alignment = 'center',
    webUrl = '',
  } = useSelector((state: any) => state.webpage);

  const handleBlur = (e: any) => {
    dispatch(
      updateWebpage({
        webUrl: e.target.value,
      }),
    );
  };

  return (
    <section id="Webpage">
      <div >
        <div >
          <iframe
            // width={`${size}%`}
            // sx={{
            //   aspectRatio: '16/9',
            // }}
            // border={0}
            // component="iframe"
            allowFullScreen
            // src="https://www.youtube.com/embed/e1nAThlU8yk"
            src={webUrl}
          />
        </div>

        <div  >
          <div  >
            <input
              // size="small"
              // fullWidth
              defaultValue={webUrl}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
