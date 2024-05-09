import { useRemoteApp } from '../hooks/use-remote-app'

function Remote1() {
  const {
    component: Button,
    loading,
    error,
  } = useRemoteApp({
    url: 'http://localhost:3001',
    scope: 'remote1',
    module: 'Button',
  })

  return (
    <div>
      <h2>Remote1 Router</h2>
      {loading && <div>loading</div>}
      {error && <div>error loading {error}</div>}
      {!loading && !error && <Button />}
    </div>
  )
}

export default Remote1
