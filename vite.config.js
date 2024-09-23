import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://piumyomin.github.io/myominthu",
  server: {
    historyApiFallback: true // Ensure SPA routing works in development
  }
});
