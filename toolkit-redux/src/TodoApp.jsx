import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";

const TodoApp = () => {

    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1)
    const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

    const prevTodo = () => setTodoId( todoId - 1 )
    const nextTodo = () => setTodoId( todoId + 1 )
    return ( 
        <>
            <h1>Todos - TRK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            <pre>{ JSON.stringify(todo) }</pre>

            <button onClick={ prevTodo } >Previous Todo</button>
            <button onClick={ nextTodo } >Next Todo</button>

            {/* <ul>
                { todos.map( todo => <li key={ todo.id } >{ todo.title }</li> ) }
            </ul> */}

            
        </>
     );
}
 
export default TodoApp;