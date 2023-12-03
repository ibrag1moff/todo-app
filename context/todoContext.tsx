"use client";
import { createContext, useState, useContext, ReactNode } from "react";

export interface Todos {
    id: number;
    title: string;
}

interface TodoContext {
    todos: Todos[];
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
    handleDelete: (id: number) => void;
}

interface TodoProviderProps {
    children: ReactNode;
}

const todoContext = createContext({} as TodoContext);

export const useTodo = () => useContext(todoContext);

export default function TodoProvider({ children }: TodoProviderProps) {
    const [todos, setTodos] = useState<Todos[]>([]);
    const [title, setTitle] = useState<string>("");

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.length > 3) {
            setTodos([...todos, { id: Date.now(), title }]);
            setTitle("");
        }
    };

    const handleDelete = (id: number) => {
        return setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <todoContext.Provider
            value={{
                todos,
                title,
                setTitle,
                handleAdd,
                handleDelete,
            }}
        >
            {children}
        </todoContext.Provider>
    );
}
