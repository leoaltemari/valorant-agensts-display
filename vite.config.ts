import react from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig({
  base: './',
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/components'),
      Assets: path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react(), tsconfigPaths()],
});