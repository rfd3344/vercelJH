import React from "react";
import type { Preview } from "@storybook/react";

import '../src/core/tailwind/tailwind.css';
import { fontsClassName } from '../src/libs/next';
import Provider from '../src/core/Provider';

export const decorators = [
  (Story) => (
    <div className={fontsClassName}>
      <Provider >

        <Story />

      </Provider>
    </div>
  ),
];



const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
