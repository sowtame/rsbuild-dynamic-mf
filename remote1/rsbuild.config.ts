import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { dependencies } from './package.json'

export default defineConfig({
  server: {
    port: 3001,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: 'http://localhost:3001',
  },
  tools: {
    swc: {
      jsc: {
        experimental: {
          plugins: [
            [
              '@swc/plugin-transform-imports',
              {
                antd: {
                  transform: 'antd/es/{{ camelCase member }}',
                },
              },
            ],
          ],
        },
      },
    },
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
        'react-router-dom': {
          requiredVersion: dependencies['react-router-dom'],
        },
        'antd/': {
          requiredVersion: dependencies['antd'],
        },
      },
      filename: 'remoteEntry.js',
    },
  },
  plugins: [pluginReact()],
})
