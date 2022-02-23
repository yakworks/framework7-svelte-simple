// eslint-disable-next-line
import svelte from 'rollup-plugin-svelte';
import path from 'path';

const buildFolder = process.env.NODE_ENV === 'production' ? 'packages' : 'build';

export default {
  plugins: [svelte()],
  build: {
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  // optimizeDeps: {
  //   exclude: ['framework7-svelte/esm/svelte']
  // }
};
