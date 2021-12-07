// import { useContext } from 'react'
// import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './TodoItem';
import { useTodos } from '../hooks/useTodos';
import { Todo } from "../interfaces/TodoInterface";

export const TodoList = () => {

    // const { todoState } = useContext( TodoContext );
    // const { todos } = todoState;
    const { todos } = useTodos();


    return (
        <ul>
            { 
                todos.map((todo: Todo) => <TodoItem key={ todo.id } todo={ todo } /> ) 
            }
        </ul>
    )
}