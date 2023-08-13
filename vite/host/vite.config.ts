import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'portal',
      remotes: {
        remoteApp: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: dependencies
  })
  ],
  build: {
    modulePreload: true,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
