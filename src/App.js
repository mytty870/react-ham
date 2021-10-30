import { useState } from "react";


export const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const increment2 = () => {
    setCount(prev => prev + 1)
  }
  const decrement2 = () => {
    setCount(prev => prev - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const duble = () => {
    setCount(prev => prev * 2)
  }

  const san = () => {
    if (count % 3 === 0) {
      setCount(count / 3)
    }

  }

  return (
    <>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>

      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={duble}>x2</button>
        <button onClick={san}>3の倍数だけ3でわる</button>
      </div>
    </>
  );
}


