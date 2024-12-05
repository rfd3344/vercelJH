import React from "react";
import type { Preview } from "@storybook/react";

import '../src/core/tailwind.css';
import { fontsClassName } from '../src/libs/next';
import ReduxProvider from '../src/core/redux/ReduxProvider';

export const decorators = [
  (Story) => (
    <div className={fontsClassName}>
      <ReduxProvider >

        <Story />

      </ReduxProvider>
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
