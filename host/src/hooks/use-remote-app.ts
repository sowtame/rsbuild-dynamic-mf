import { importRemote, ImportRemoteOptions } from '@module-federation/utilities'
import React, { ReactNode, useMemo } from 'react'
import { useEffect, useState } from 'react'

const cache: any = {}

export const useRemoteApp = (params: ImportRemoteOptions) => {
  const cacheKey = useMemo(() => {
    return `${params.url}/${params.scope}/${params.module}`
  }, [])

  const [component, setComponent] = useState<ReactNode>(cache[cacheKey])
  const [loading, setLoading] = useState(!cache[cacheKey])
  const [error, setError] = useState(false)

  useEffect(() => {
    if (cache[cacheKey]) {
      return
    }

    importRemote(params)
      .then((value: any) => {
        const lazy = React.lazy(async () => value)
        cache[cacheKey] = lazy

        setComponent(lazy)

        console.log(__webpack_share_scopes__?.default)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { loading, component, error }
}
