import React from 'react'
import { fibonacci } from '@username/awesome-typescript-lib'
import './App.css'

function App() {
  const [value, setValue] = React.useState('1')
  const [result, setResult] = React.useState('')

  const onClick = () => {
    const val = +value
    setValue(`${+value + 1}`)
    return isNaN(val) ? '' : setResult('' + fibonacci(val))
  }

  return (
    <div className="form">
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={onClick}>Fibonacci</button>
      <span>{result}</span>
    </div>
  )
}

export default App
