export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props : {data : data}
    }
}
function Data({data}) {
    return (<>
        <Head>
            <title>Data page</title>
        </Head>
        <div className="container mx-auto flex flex-col gap-2">
            {data.map(i => (
                <div key={i.id}>
                    {i.name}
                </div>
            ))}
        </div>
    </>);
}

export default Data;