// next
import Link from "next/link";

// icons
import { GrAdd } from "react-icons/gr";

export default function AddTodoButton() {
    return (
        <button className="fixed bottom-[20px] right-[15px] bg-main rounded-full p-4">
            <Link href="/addtodo">
                <GrAdd size={30} />
            </Link>
        </button>
    );
}
