import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
   resolve: {
      alias: {
        '@mat4/vue': path.resolve(__dirname, '../../packages/vue/src'),
        '@mat4/react/components': path.resolve(__dirname, '../../packages/vue/src/components')
      }
    }
})
