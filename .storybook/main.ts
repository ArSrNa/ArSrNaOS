import type { StorybookConfig } from '@storybook/nextjs-vite';
import tailwindcss from "@tailwindcss/vite"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  core: {
    allowedHosts: true,
  },
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(process.cwd(), '.'),
      },
    };
    config.define = {
      ...config.define,
      'process.env.NODE_ENV': JSON.stringify('development'),
    };
    config.server = {
      ...config.server,
      watch: {
        usePolling: true,
        interval: 100,
      },
      host: true,
      allowedHosts: true
    }
    return config;
  }
};
export default config;