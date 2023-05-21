import Link from "next/link";

function SOMP() {
    return (<>
        <section className="py-5 container mx-auto">
            <h3 className="text-[1.5rem]">Some of my teachers</h3>
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-3 border-2 border-blue p-2 rounded-md">
                    <Link className="text-blue" href="https://github.com/eyad-karim/eyadkarim" target="_blank">eyad-karim/eyadkarim</Link>
                    <p>bla bla bla bla bla bla</p>
                </div>
                <div className="col-span-3 border-2 border-blue p-2 rounded-md">
                    <Link className="text-blue" href="https://github.com/eyad-karim/eyadkarim" target="_blank">eyad-karim/todolist</Link>
                    <p>bla bla bla bla bla bla</p>
                </div>
                <div className="col-span-3 border-2 border-blue p-2 rounded-md">
                    <Link className="text-blue" href="https://github.com/eyad-karim/eyadkarim" target="_blank">eyad-karim/blabla</Link>
                    <p>bla bla bla bla bla bla</p>
                </div>
                <div className="col-span-3 border-2 border-blue p-2 rounded-md">
                    <Link className="text-blue" href="https://github.com/eyad-karim/eyadkarim" target="_blank">eyad-karim/eyadkarim2</Link>
                    <p>bla bla bla bla bla bla</p>
                </div>
            </div>
        </section>
    </>);
}

export default SOMP;