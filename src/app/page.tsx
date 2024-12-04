import React from 'react';
import _ from 'lodash';

import path from 'path';
import fs from 'fs';

import { PagePath } from 'src/constants/pagePath';
import Section from 'src/sections/home/Section';
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
    <section id="Home" className='container'>

      <Section title="Tools" linkMap={ToolsLinks} />

      <Section title="Cloud" linkMap={CloudLinks} />
      <Section title="Github" linkMap={GithubLinks} />
      <Section title="Develop" linkMap={DevelopLinks} />
      <Section
        title="Markdown"
        linkMap={mdFiles.reduce(
          (acc, item) => ({
            ...acc,
            [item]: `${PagePath.markdown}?name=${item}`,
          }),
          {},
        )}
      />

      <Section title="Work" linkMap={WorkLinks} />
      <Section title="Home" linkMap={HomeLinks} />
      <Section title="Fun" linkMap={FunLinks} />
      <Section title="Shop" linkMap={ShopLinks} />

      <Section title="Other" linkMap={OtherLinks} />

    </section>
  );
}
