// next
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// css
import "./globals.css";
import Navbar from "@/components/Navbar";

// context
import TodoProvider from "@/context/todoContext";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Todo App",
    description: "Created by ibrag1moff",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} bg-[#151515] text-[#f5f5f5]`}
            >
                <TodoProvider>
                    <Navbar />
                    {children}
                </TodoProvider>
            </body>
        </html>
    );
}
