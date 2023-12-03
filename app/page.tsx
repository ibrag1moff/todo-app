// next
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <>
            <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
                <Link
                    className="text-center bg-main py-3 px-2 xs:px-5 sm:px-8 md:text-2xl md:py-6 md:px-12 rounded-tr-2xl hover:bg-[#7a0ff598] transition-all duration-300 font-semibold"
                    href="/todolist"
                >
                    let's get started
                </Link>
            </div>

            <div className="absolute bottom-0 left-0 bg-main w-full h-[200px] sm:h-[280px] lg:hidden rounded-tr-full"></div>
        </>
    );
};

export default Home;
