import NavBar from "./navbar";

function Layout({children}) {
    return ( 
        <>
            <NavBar/>
            {children}
        </>
     );
}

export default Layout;