import { useState } from 'react'

export default function Button() {
  const [counter, setCounter] = useState(0)
  return <div onClick={() => setCounter(counter + 1)}>remote1 {counter}</div>
}
