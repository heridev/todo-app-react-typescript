import { useTodos } from '../hooks/useTodos';
import { Todo } from '../interfaces/TodoInterface';

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

    // const { toggleTodo } = useContext( TodoContext )
    const { toggleTodo } = useTodos();

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }}
            onClick={ () => toggleTodo( todo.id ) }>
           { todo.desc } 
        </li>
    )
}
