import { useRemoteApp } from '../hooks/use-remote-app'

function Remote1() {
  const { component: Button, loading } = useRemoteApp({
    url: 'http://localhost:3001',
    scope: 'remote1',
    module: 'Button',
  })

  return (
    <div>
      <h2>Remote1 Router</h2>
      {loading && <div>loading</div>}
      {!loading && <Button />}
    </div>
  )
}

export default Remote1
