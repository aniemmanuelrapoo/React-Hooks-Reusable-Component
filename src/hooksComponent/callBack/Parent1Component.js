import React, { useCallback, useState } from 'react'
import Button1 from './Button1'
import Count1 from './Count1'
import Title from './Title'

const Parent1Component = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age]) 
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count1 text="Age" count={age} />
            <Button1 handleClick={incrementAge}>Increment Age</Button1>
            <Count1 text="Salary" count={salary} />
            <Button1 handleClick={incrementSalary}>Increment Salary</Button1>
        </div>
    )
}

export default Parent1Component
