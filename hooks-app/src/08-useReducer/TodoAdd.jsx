import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ( { onNewTodo } ) => {

    const { formState, onInputChange, onResetForm } = useForm( {
        description: ''
    } )
    const { description } = formState;
    
    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo( newTodo );
        onResetForm();
    }

  return (
    <form onSubmit={ onFormSubmit }>
        <input type="text"
             placeholder='What we have to do?'
             className='form-control' name='description' value={ description } onChange={ onInputChange } />
        <button type="submit" className='btn btn-primary mt-2'>Add</button>
    </form>
  )
}
