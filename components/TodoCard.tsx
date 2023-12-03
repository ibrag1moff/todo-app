// context
import { Todos, useTodo } from "@/context/todoContext";
import { useState } from "react";

// icons
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";

interface TodoCardProps {
    todo: Todos;
}

export default function TodoCard({ todo }: TodoCardProps) {
    const { handleDelete } = useTodo();
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <div className="border-2 border-main rounded-xl p-4 flex items-center justify-between md:w-[500px]">
            {isCompleted ? (
                <s className="max-w-[180px] text-main">{todo.title}</s>
            ) : (
                <h1 className="max-w-[180px]">{todo.title}</h1>
            )}
            <div className="flex items-center gap-2">
                <button onClick={() => setIsCompleted(!isCompleted)}>
                    <MdOutlineDoneAll size={25} color="#fff" />
                </button>
                <button onClick={() => handleDelete(todo.id)}>
                    <MdOutlineClose size={30} color="#fff" />
                </button>
            </div>
        </div>
    );
}
