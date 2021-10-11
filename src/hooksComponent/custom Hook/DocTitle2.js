import React, { useState } from 'react'
import useDocumentTitle from './hooksCustom/useDocumentTitle'

const DocTitle2 = () => {
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count - {count}</button>
        </div>
    )
}

export default DocTitle2
