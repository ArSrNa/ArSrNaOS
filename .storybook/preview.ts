import type { Preview } from '@storybook/nextjs'
import './sbpreview.css'; // 引入自定义全局样式

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