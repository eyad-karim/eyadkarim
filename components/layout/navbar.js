import Image from "next/image";
import Link from "next/link";

function NavBar() {
    return ( 
        <>
            <header>
                <nav className="flex flex-row justify-around items-center p-1">
                    <div className="flex items-center flex-row">
                        <span className="text-blue-500 font-bold">eyad karim</span>
                    </div>
                    <ul className="flex flex-row items-center gap-3" >
                        <li className="p-2 transition-all hover:scale-105 hover:bg-blue-500 hover:text-white" ><Link href={'/'}>home</Link></li>
                        <li className="p-2 transition-all hover:scale-105 hover:bg-blue-500 hover:text-white" ><Link href={'/'}>home</Link></li>
                    </ul>
                </nav>
            </header>
        </>
     );
}

export default NavBar;