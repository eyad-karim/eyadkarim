import Link from "next/link";
import NavBar from "./navbar";

function Layout({children}) {
    return ( 
        <>
            <NavBar/>
            {children}
            <footer className="flex flex-row justify-center p-5">
                <h6 className="text-[1rem] text-blue-light">Copyright 2023</h6>
            </footer>
        </>
     );
}

export default Layout;