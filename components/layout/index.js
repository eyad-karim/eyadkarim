import NavBar from "./navbar";

function Layout({children}) {
    return ( 
        <>
            <NavBar/>
            {children}
            <footer className="flex flex-row justify-center p-5">
                <h6 className="text-[1rem] text-blue-light font-bold">Copyright 2023 | Eyad Karim</h6>
            </footer>
        </>
     );
}

export default Layout;