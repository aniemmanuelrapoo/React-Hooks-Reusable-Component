import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
    useEffect(() => {
        // focus input element with ref
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput
