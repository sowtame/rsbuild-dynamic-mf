import { useState } from 'react'
import { Button } from 'antd'

export default function Button2() {
  const [counter, setCounter] = useState(0)
  return (
    <div onClick={() => setCounter(counter + 1)}>
      <Button>click</Button> {counter}
    </div>
  )
}
