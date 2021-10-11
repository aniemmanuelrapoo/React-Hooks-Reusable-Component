import React, { useState } from 'react'

const CounterTwo = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prev => prev + 1)
        }
        
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default CounterTwo
