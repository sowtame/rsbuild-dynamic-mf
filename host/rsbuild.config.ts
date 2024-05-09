import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  server: {
    port: 3000,
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
      },
    },
  },
  plugins: [pluginReact()],
})
