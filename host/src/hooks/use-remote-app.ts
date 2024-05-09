import { loadRemote, registerRemotes } from '@module-federation/enhanced/runtime'
// import { importRemote } from '@module-federation/utilities'
import React, { ReactNode } from 'react'
import { useEffect, useState } from 'react'

export const useRemoteApp = () => {
  const [component, setComponent] = useState<ReactNode>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    registerRemotes([
      {
        name: 'remote1',
        entry: 'http://localhost:3001/remoteEntry.js',
      },
    ])

    loadRemote('remote1/Button')
      .then((value: any) => {
        console.log(value.default)

        const lazy = React.lazy(async () => value)
        setComponent(lazy)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { loading, component }
}
