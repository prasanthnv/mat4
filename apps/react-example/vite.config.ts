import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mat4/react': path.resolve(__dirname, '../../packages/react/src'),
      '@mat4/react/components': path.resolve(__dirname, '../../packages/react/src/components')
    }
  }
})
