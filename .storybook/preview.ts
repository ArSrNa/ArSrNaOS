import type { Preview } from '@storybook/nextjs'
import '../src/styles/globals.css'; // 引入 Tailwind 4 全局样式
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