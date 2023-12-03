"use client";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// icons
import { SlArrowLeft } from "react-icons/sl";
import { SlOptionsVertical } from "react-icons/sl";

export default function Navbar() {
    const pathname = usePathname();

    const [dropDownActive, setDropDownActive] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("click", () => {
            setDropDownActive(false);
        });
        window.addEventListener("scroll", () => {
            setDropDownActive(false);
        });
    }, [dropDownActive]);

    return (
        <nav className="bg-main py-5 px-2 sm2:px-12 flex items-center justify-between">
            <Link className={pathname === "/" ? "hidden" : "block"} href="/">
                <SlArrowLeft size={20} />
            </Link>
            <Link href="/" className="font-semibold text-lg">
                Todo App
            </Link>
            <div className="relative">
                <button
                    className="z-20"
                    onClick={(e) => {
                        e.stopPropagation();
                        setDropDownActive(!dropDownActive);
                    }}
                >
                    <SlOptionsVertical size={20} />
                </button>
                <div
                    className={
                        dropDownActive
                            ? "absolute right-[10px] z-10 bottom-[-150px] w-[110px] h-[150px] rounded-tr-xl bg-[#212121] border-2 border-main"
                            : "hidden"
                    }
                >
                    <ul className="flex flex-col gap-2 items-center justify-center pt-6">
                        <li className="hover:text-main transition-all duration-200">
                            <Link href="/todolist">Todo List</Link>
                        </li>
                        <li className="hover:text-main transition-all duration-200">
                            <Link href="/addtodo">Add Todo</Link>
                        </li>
                        <li className="hover:text-main transition-all duration-200">
                            <a
                                target="__blank"
                                href="https://github.com/ibrag1moff"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
