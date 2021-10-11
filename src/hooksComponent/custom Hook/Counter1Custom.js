import React from 'react'
import useCounter from './hooksCustom/useCounter'

const Counter1Custom = () => {
    const [count, incrementCount, decrementCount, reset] = useCounter(0, 1)
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incrementCount}>IncrementCount</button>
            <button onClick={decrementCount}>DecrementCount</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter1Custom
