// import Button from 'remote1/button';

import { useRemoteApp } from '../hooks/use-remote-app'

function Remote1() {
  const { component: Button, loading } = useRemoteApp()
  console.log('🚀 ~ Remote1 ~ loading:', loading)
  console.log('🚀 ~ Remote1 ~ Button:', Button)

  return (
    <div>
      <h2>Remote1 Router</h2>
      {loading && <div>loading</div>}
      {!loading && <Button />}
    </div>
  )
}

export default Remote1
