import React from 'react'
import useCounter from './hooksCustom/useCounter'

const Counter2Custom = () => {
    const [count, incrementCount, decrementCount, reset] = useCounter(10, 10)
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incrementCount}>IncrementCount</button>
            <button onClick={decrementCount}>DecrementCount</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter2Custom

