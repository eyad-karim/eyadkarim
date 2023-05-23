import Link from "next/link";

function SOMP() {
    let colspan = "col-span-2 md:col-span-3 sm:col-span-12 "
    return (<>
        <section className="py-5 container mx-auto my-10">
            <h3 className="text-[1.5rem] text-blue-light">Some of my projects</h3>
            <div className="grid grid-cols-12 gap-2 p-2">
                <div className={colspan+" project-card"}>
                    <Link className="text-blue-light" href="https://github.com/eyad-karim/eyadkarim" target="_blank">eyad-karim/eyadkarim</Link>
                    <p className="text-[0.8rem]">my own website</p>
                </div>
                <div className={colspan+" project-card"}>
                    <Link className="text-blue-light" href="https://github.com/eyad-karim/tailwindcss-project" target="_blank">eyad-karim/tailwindcss-project</Link>
                    <p className="text-[0.8rem]">project that I learn tailwindcss in</p>
                </div>
                
            </div>
        </section>
    </>);
}

export default SOMP;