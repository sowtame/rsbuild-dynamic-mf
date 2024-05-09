import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { dependencies } from './package.json'

export default defineConfig({
  server: {
    port: 3000,
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
      name: 'host',
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
    },
  },
  plugins: [pluginReact()],
})
