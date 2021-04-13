import React, { useReducer, useState } from 'react'

const ACTIONS = {
    ADD_TODO: 'add-todo'
}

// There's a problem with todos not being defined?

function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.dispatch.name)]
        default:
            return console.log('weee')
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false}
}

export default function Form() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, dispatch: { name: name } })
        setName('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
        </>
    )
}
