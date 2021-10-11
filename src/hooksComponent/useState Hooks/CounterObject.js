import React, { useState } from 'react'

const CounterThree = () => {
    const initialObject = {
        firstName: '',
        lastName: ''
    }
    const [name, setName] = useState(initialObject)

    return (
        <form>
            <label>First Name</label>
            <input type="text" name='firstName' onChange={(e) => setName({...name, firstName: e.target.value})} value={name.firstName} /><br /><br />
            <label>Last Name</label>
            <input type="text" name='lastName' onChange={(e) => setName({...name, lastName: e.target.value})} value={name.lastName} />
            <h2>Your First Name is - {name.firstName}</h2>
            <h2>Your Last Name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default CounterThree
