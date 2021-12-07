import { useReducer } from 'react';
import { TodoState } from '../interfaces/TodoInterface';

import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Buy some groceries',
            completed: true
        },
        {
            id: '2',
            desc: 'Attend a doctors appointment',
            completed: false
        },
    ],
    completed: 0,
    pending: 2
}


interface childrenProps {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: childrenProps ) => {

    const [ todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE );

    const toggleTodo = ( id: string ) => {
        dispatch({ type: 'toggleTodo', payload: { id } })
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}