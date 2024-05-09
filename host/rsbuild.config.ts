import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  server: {
    port: 3000,
  },
  moduleFederation: {
    options: {
      name: 'host',
      shared: ['react', 'react-dom'],
    },
  },
  // tools: {
  //   rspack: (config, { appendPlugins }) => {
  //     appendPlugins([
  //       new ModuleFederationPlugin({
  //         name: 'host',
  //         remotes: {
  //           remote1: 'remote1@http://localhost:3001/mf-manifest.json',
  //           // remote2: 'remote2@http://localhost:3002/mf-manifest.json',
  //         },
  //         shared: ['react', 'react-dom'],
  //       }),
  //     ])
  //   },
  // },
  plugins: [pluginReact()],
})
