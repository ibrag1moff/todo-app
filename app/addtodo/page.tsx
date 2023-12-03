"use client";
// context
import { useTodo } from "@/context/todoContext";
import { Shake } from "reshake";

export default function AddTodo() {
    const { title, setTitle, handleAdd } = useTodo();
    return (
        <>
            <div className="flex items-center justify-center mt-12 md:mt-32">
                <form
                    className="flex flex-col items-center justify-center gap-5"
                    onSubmit={handleAdd}
                >
                    <input
                        className="bg-[#373535] border-none outline-none py-3 px-5 md:w-[400px] rounded-full"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder="Type your todo..."
                    />
                    {title.length > 3 ? (
                        <button
                            className="bg-main py-3 px-9 rounded-tr-2xl hover:bg-[#7a0ff598] md:px-16 md:py-4 transition-all duration-300 font-semibold"
                            type="submit"
                        >
                            add
                        </button>
                    ) : (
                        <Shake
                            h={5}
                            v={5}
                            r={3}
                            dur={400}
                            int={10}
                            max={100}
                            fixed={false}
                            fixedStop={false}
                            freez={true}
                        >
                            <button
                                className="bg-main py-3 px-9 rounded-tr-2xl hover:bg-[#7a0ff598] md:px-16 md:py-4 transition-all duration-300 font-semibold"
                                type="submit"
                            >
                                add
                            </button>
                        </Shake>
                    )}
                </form>
            </div>
            <div className="absolute bottom-0 left-0 bg-main w-full h-[250px] sm:h-[280px] lg:hidden rounded-tl-full"></div>
        </>
    );
}
