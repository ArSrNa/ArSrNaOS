import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  build: {
    outDir: "build"
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    open: false,
    watch: {
      usePolling: true, // 修复HMR热更新失效
    },
  },
  plugins: [tsConfigPaths(), react(), ViteImageOptimizer({
    jpg: {
      quality: 91,
    },
    png: {
      quality: 78
    },
    webp: {
      quality: 80,
      lossless: false
    },
    avif: { quality: 69 }, // AVIF 压缩率比 WebP 更高，但兼容性稍弱
    // include: /\.(png|jpe?g|svg)$/i, // 仅处理指定格式
    exclude: /node_modules/ // 排除 node_modules 目录
  })]
});