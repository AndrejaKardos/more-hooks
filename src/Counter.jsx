import React, { useReducer } from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1}
        default: 
            return state
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    function increase() {
        dispatch({ type: ACTIONS.INCREMENT })
    }

    function decrease() {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    return (
        <>
            <button onClick={decrease}>-</button>
            <span>{state.count}</span>
            <button onClick={increase}>+</button>
        </>
    )
}
