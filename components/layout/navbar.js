import Image from "next/image";
import Link from "next/link";

function NavBar() {
    return ( 
        <>
            <header className="fixed w-full bg-white px-1">
                <div className="container mx-auto flex flex-row justify-between items-center py-[10px]">
                    <span className="text-[1.5em] font-bold text-blue-light">EYAD</span>
                    <nav className="text-[1.1em]">
                        <ul className="flex flex-row items-center gap-3 py-2" >
                            <li className="mx-2 transition-all hover:text-blue-light font-semibold"><Link href={'/'}>Home</Link></li>
                            <li className="mx-2 transition-all hover:text-blue-light font-semibold"><Link href={'/contact'}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
     );
}

export default NavBar;