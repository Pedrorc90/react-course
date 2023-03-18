import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'


const init = () => {
    return JSON.parse(localStorage.getItem('_todos')) || []
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init )

    useEffect(() => {
        localStorage.setItem('_todos', JSON.stringify( todos ))    
    }, [ todos ])

    const handleNewTodo = ( todo ) => {
        dispatch({ type: '[TODO] Add Todo', payload: todo } )
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({ type: '[TODO] Remove Todo', payload: id })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({ type: '[TODO] Toggle Todo', payload: id })
    }

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo => !todo.done).length;

  return { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo }
}
