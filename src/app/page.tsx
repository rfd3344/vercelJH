import React from 'react';
import _ from 'lodash';

import path from 'path';
import fs from 'fs';

import { PagePath } from 'src/constants/pagePath';
import LinksSection from 'src/sections/home/LinksSection';
import {
  ToolsLinks,
  CloudLinks,
  GithubLinks,
  DevelopLinks,
  WorkLinks,
  HomeLinks,
  FunLinks,
  ShopLinks,
  OtherLinks,
} from 'src/sections/home/homeConst';

export default function Page({ }) {
  const mdFiles = fs.readdirSync(path.resolve('./public', 'markdown'));

  return (
    <main id="home" className='container'>

      <LinksSection title="Tools" linkMap={ToolsLinks} />

      <LinksSection title="Cloud" linkMap={CloudLinks} />
      <LinksSection title="Github" linkMap={GithubLinks} />
      <LinksSection title="Develop" linkMap={DevelopLinks} />
      <LinksSection
        title="Markdown"
        linkMap={mdFiles.reduce(
          (acc, item) => ({
            ...acc,
            [item]: `${PagePath.markdown}?name=${item}`,
          }),
          {},
        )}
      />

      <LinksSection title="Work" linkMap={WorkLinks} />
      <LinksSection title="Home" linkMap={HomeLinks} />
      <LinksSection title="Fun" linkMap={FunLinks} />
      <LinksSection title="Shop" linkMap={ShopLinks} />

      <LinksSection title="Other" linkMap={OtherLinks} />

    </main>
  );
}
