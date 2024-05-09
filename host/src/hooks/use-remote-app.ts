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

  useEffect(() => {
    if (cache[cacheKey]) {
      return
    }

    importRemote(params)
      .then((value: any) => {
        const lazy = React.lazy(async () => value)
        cache[cacheKey] = lazy
        setComponent(lazy)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { loading, component }
}
