import Head from "next/head";

function NotFound() {
    return (<>
        <Head>
            <title>404</title>
        </Head>
        <section className="mt-20">
            <div className="section  flex justify-center items-center">
                404 | This page could not be found
            </div>
        </section>
    </>);
}

export default NotFound;