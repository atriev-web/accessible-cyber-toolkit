import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages URL: https://atriev-web.github.io/accessible-cyber-toolkit/
export default defineConfig({
  plugins: [react()],
  base: '/accessible-cyber-toolkit/',
});
