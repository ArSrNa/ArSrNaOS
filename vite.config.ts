import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
export default defineConfig({
  build: {
    outDir: "build"
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    open:false,
    watch: {
      usePolling: true, // 修复HMR热更新失效
    },
  },
  plugins: [tsConfigPaths(), react()]
});