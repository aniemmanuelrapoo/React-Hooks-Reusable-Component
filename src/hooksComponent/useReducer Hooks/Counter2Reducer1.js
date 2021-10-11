import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secoundCounter: 10
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secoundCounter: state.secoundCounter + action.value }
        case 'decrement2':
            return { ...state, secoundCounter: state.secoundCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter2Reducer1 = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First-count - {count.firstCounter}</div>
            <div>Secound-count - {count.secoundCounter}</div>
            <button onClick={() => dispatch({type:'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type:'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type:'decrement', value: 5})}>Decrement 5</button>
            <div>
            <button onClick={() => dispatch({type:'increment2', value: 1})}>Increment counter2</button>
            <button onClick={() => dispatch({type:'decrement2', value: 1})}>Decrement counter2</button>
            </div>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default Counter2Reducer1