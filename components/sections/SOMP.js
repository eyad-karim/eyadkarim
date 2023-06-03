import Link from "next/link";

function SOMP() {
    return (<>
        <section className="section">
            <div className="m-2">
                <h3 className="text-[1.5rem] text-center font-bold my-3 text-blue-light">Some of my projects</h3>
                <div className="flex flex-row md:flex-row lg:flex-row sm:flex-col items-center justify-center gap-2">
                    <div className="project-card">
                        <Link className="text-blue-light font-bold" href="https://github.com/eyad-karim/eyadkarim" target="_blank">Eyad Website</Link>
                        <p className="text-[0.8rem]">Website talking about me and shows my projects.</p>
                    </div>
                    <div className="project-card">
                        <Link className="text-blue-light font-bold" href="https://github.com/eyad-karim/tailwindcss-project" target="_blank">Tailwindcss project</Link>
                        <p className="text-[0.8rem]">project that I learn tailwindcss in, and test some classnames.</p>
                    </div>
                    <div className="project-card">
                        <Link className="text-blue-light font-bold" href="https://github.com/eyad-karim/fakewindows" target="_blank">Fake Windows project</Link>
                        <p className="text-[0.8rem]">fake windows os</p>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default SOMP;