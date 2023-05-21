import Image from "next/image";
import Link from "next/link";

function NavBar() {
    return ( 
        <>
            <header>
                <nav className="container m-auto flex flex-row justify-between items-center p-1">
                    <div className="flex items-center flex-row">
                        <Image src='ek.svg' width={32} height={32}/>
                    </div>
                    <ul className="flex flex-row items-center gap-3 py-2" >
                        <li className="mx-2 transition-all hover:text-blue" ><Link href={'/'}>Home</Link></li>
                        <li className="mx-2 transition-all hover:text-blue" ><Link href={'/about'}>About</Link></li>
                    </ul>
                </nav>
            </header>
        </>
     );
}

export default NavBar;