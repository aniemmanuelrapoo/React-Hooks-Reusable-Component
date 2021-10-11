import React from 'react'

const Count1 = ({text, count}) => {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count1)
