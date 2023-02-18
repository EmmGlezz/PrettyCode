import { useState } from 'react'
import CodeInput from './components/CodeInput'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Pretty Code</h1>
      </div>
      <div className="card">
        <CodeInput />
      </div>
    </div>
  )
}

export default App
