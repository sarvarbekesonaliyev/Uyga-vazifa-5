import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="container">
      <div className="counter-card">
        <h1 className="title">✨ Counter</h1>
        
        <div className="counter-display">
          <span className="counter-number">{count}</span>
        </div>

        <div className="button-group">
          <button 
            className="btn btn-decrease" 
            onClick={decrement}
            title="Decrease counter"
          >
            <span className="btn-icon">−</span>
            <span className="btn-label">Decrease</span>
          </button>

          <button 
            className="btn btn-reset" 
            onClick={reset}
            title="Reset counter"
          >
            <span className="btn-icon">↻</span>
            <span className="btn-label">Reset</span>
          </button>

          <button 
            className="btn btn-increase" 
            onClick={increment}
            title="Increase counter"
          >
            <span className="btn-icon">+</span>
            <span className="btn-label">Increase</span>
          </button>
        </div>

        <div className="status">
          {count > 0 && <p className="positive">📈 Count is positive!</p>}
          {count < 0 && <p className="negative">📉 Count is negative!</p>}
          {count === 0 && <p className="neutral">⚖️ Count is neutral</p>}
        </div>
      </div>
    </div>
  )
}

export default App
