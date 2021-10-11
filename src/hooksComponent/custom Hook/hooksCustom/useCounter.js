import { useState } from 'react'

function useCounter(initialCount = 0, value) {

    const[count, setCount] = useState(initialCount)
    const incrementCount = () => {
        setCount(prevS => prevS + value)
    }
    const decrementCount = () => {
        setCount(prevS => prevS - value)
    }
    const reset = () => {
        setCount(initialCount)
    }
    return [count, incrementCount, decrementCount, reset]
}

export default useCounter
