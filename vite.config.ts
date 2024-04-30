import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7000,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({ include: '**/*.svg' }),
    TanStackRouterVite(),
],
})
