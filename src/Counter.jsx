import React, { useState, useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1}
        default: 
            return state
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    function increase() {
        dispatch({ type: 'increment' })
    }

    function decrease() {
        dispatch({ type: 'decrement' })
    }

    return (
        <>
        <div></div>
            <button onClick={decrease}>-</button>
            <span>{state.count}</span>
            <button onClick={increase}>+</button>
        </>
    )
}
