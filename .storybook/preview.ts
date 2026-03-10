import type { Preview } from '@storybook/react-vite';
import { withPerformance } from 'storybook-addon-performance';
import '../src/index.css';

const preview: Preview = {
  decorators: [withPerformance],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
