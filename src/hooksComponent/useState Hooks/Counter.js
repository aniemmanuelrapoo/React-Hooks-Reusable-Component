import React, { useEffect, useState } from 'react'

function Counter(props) {
    const [count, setCount] = useState(5);
    const [ age, setAge] = useState(21);
    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [sum, setSum] = useState(null)
    // const [fruit, setFruit] = useState("Banana");

    useEffect(() => {
        document.title = `you clicked ${count} times`;
    })
    function handleChange1(e){
        let value = e.target.value
        setNum1(value)
    }
    function handleChange2(e){
        let value = e.target.value
        setNum2(value)
    }
    
    function plus(e){
        e.preventDefault()
       let sumTotal = Number(num1) + Number(num2)
       setSum(sumTotal)
    }
    function minus(e){
        e.preventDefault()
        let sumTotal = Number(num1) - Number(num2)
        setSum(sumTotal)
    }

    function multi(e){
        e.preventDefault()
        let sumTotal = Number(num1) * Number(num2)
        setSum(sumTotal)
    }
    

    return (
        <div>
            <p>You clicked {count}</p>
            <p>{age}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <button onClick={() => setAge(33)}>AddAge</button><br /><br />
            <label htmlFor="" >num1</label>
            <input type="text" onChange={handleChange1} />
            <br /><br />
            <label htmlFor="">num2</label>
            <input type="text" onChange={handleChange2} />
            <br /><br />
            <button onClick={plus}>ADD</button>
            <button onClick={minus}>MIN</button>
            <button onClick={multi}>MUL</button>
            <div>{sum}</div>
            
        </div>
    )
}

export default Counter 
