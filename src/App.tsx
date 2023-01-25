import { useState } from 'react'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant='primary'></Button>
      <Button variant='secondary'></Button>
      <Button variant='danger'></Button>
      <Button variant='success'></Button>
    </>
  )
}

export default App
