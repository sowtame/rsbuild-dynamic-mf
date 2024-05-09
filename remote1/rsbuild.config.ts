import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  server: {
    port: 3001,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: 'http://localhost:3001',
  },
  moduleFederation: {
    options: {
      name: 'remote1',
      exposes: {
        './Button': './src/Button',
        './app': './src/app.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
      filename: 'remoteEntry.js',
    },
  },
  plugins: [pluginReact()],
})
