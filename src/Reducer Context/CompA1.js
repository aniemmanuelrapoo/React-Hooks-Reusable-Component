import React, { useContext } from 'react'
import { CountContext } from '../App'

const CompA1 = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            CompA1 = {countContext.countState}
           <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompA1

