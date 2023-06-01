import Link from "next/link";

function SOMP() {
    let colspan = "col-span-3 md:col-span-3 sm:col-span-12 "
    return (<>
        <section className="py-[100px] container mx-auto my-10">
            <div className="m-2">
                <h3 className="text-[1.5rem] text-center font-bold my-3 text-blue-light">Some of my projects</h3>
                <div className="grid grid-cols-12 gap-8 p-2">
                    <div className={colspan + " project-card"}>
                        <Link className="text-blue-light font-bold" href="https://github.com/eyad-karim/eyadkarim" target="_blank">Eyad Website</Link>
                        <p className="text-[0.8rem]">Website talking about me and shows my projects.</p>
                    </div>
                    <div className={colspan + " project-card"}>
                        <Link className="text-blue-light font-bold" href="https://github.com/eyad-karim/tailwindcss-project" target="_blank">Tailwindcss project</Link>
                        <p className="text-[0.8rem]">project that I learn tailwindcss in, and test some classnames.</p>
                    </div>   
                </div>
            </div>
        </section>
    </>);
}

export default SOMP;