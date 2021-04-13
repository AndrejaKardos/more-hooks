import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    function increase() {
        setCount(prevCount => prevCount + 1)
    }

    function decrease() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <>
        <div></div>
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
        </>
    )
}
