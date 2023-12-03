"use client";
// components
import AddTodoButton from "@/components/AddTodoButton";
import TodoCard from "@/components/TodoCard";

// context
import { useTodo } from "@/context/todoContext";

export default function TodoList() {
    const { todos } = useTodo();
    return (
        <div className="py-8 px-2 md:py-16">
            <h3
                className={
                    todos.length === 0
                        ? "hidden"
                        : "font-medium text-xl mb-4 md:text-center md:text-2xl"
                }
            >
                Todo List
            </h3>
            <div className="flex flex-col gap-4 md:items-center md:justify-center md:flex-wrap md:flex-row">
                {todos.length > 0 ? (
                    todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
                ) : (
                    <h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl md:text-5xl font-semibold">
                        No tasks
                    </h1>
                )}
            </div>
            <AddTodoButton />
        </div>
    );
}
