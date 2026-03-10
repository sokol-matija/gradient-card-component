import addonPerformancePanel from '@github-ui/storybook-addon-performance-panel';
import { definePreview } from '@storybook/react-vite';
import '../src/index.css';

export default definePreview({
  addons: [addonPerformancePanel()],
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
});
