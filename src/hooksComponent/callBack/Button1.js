import React from 'react'

const Button1 = ({children, handleClick}) => {
    console.log('Rendering button - ', children)
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default React.memo(Button1)
