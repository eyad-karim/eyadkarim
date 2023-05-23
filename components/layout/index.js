import Link from "next/link";
import NavBar from "./navbar";

function Layout({children}) {
    return ( 
        <>
            <NavBar/>
            {children}
            <footer className="bg-blue-dark text-white py-5">
                <div className="container mx-auto flex flex-row justify-around">
                    <div>
                        <ol>
                            <li><Link className="hover:text-blue-light transition-all" href={"/"}>Home</Link></li>
                            <li><Link className="hover:text-blue-light transition-all" href={"/contact"}>Contact</Link></li>
                        </ol>
                    </div>
                    <div>
                        <ol>
                            <li><Link className="hover:text-blue-light transition-all" href={"https://nextjs.org/"} target="_blank">Next js</Link></li>
                            <li><Link className="hover:text-blue-light transition-all" href={"https://tailwindcss.com/"} target="_blank">Tailwind css</Link></li>
                            <li><Link className="hover:text-blue-light transition-all" href={"https://github.com/"} target="_blank">Github</Link></li>
                            <li><Link className="hover:text-blue-light transition-all" href={"https://vercel.com/"} target="_blank">Vercel</Link></li>
                        </ol>
                    </div>
                </div>
            </footer>
        </>
     );
}

export default Layout;