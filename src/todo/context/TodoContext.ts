import { createContext } from "react";
import { TodoState } from "../interfaces/TodoInterface";

export type TodoContextProps = {
    todoState: TodoState;
    toggleTodo: ( id: string ) => void;
} 

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps );