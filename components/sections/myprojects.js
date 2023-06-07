import Link from "next/link";

function MyProjects() {
    return (<>
        <section className="code section">
            <h3 className="title">My projects</h3>
            <pre>
                <span className="text-code-blue">const</span> <span className="text-code-sky">projects</span> = <span className="text-code-yellow">{"{"}</span><br/>
                {"  "}<span className="text-code-sky">"Eyad website"</span> : <span className="text-code-brown">"Website talking about me and shows my projects."</span>,<br/>
                {"  "}<span className="text-code-sky">"Tailwindcss project"</span> : <span className="text-code-brown">"project that I learn tailwindcss in, and test some classnames."</span>,<br/>
                {"  "}<span className="text-code-sky">"Fake Windows project"</span> : <span className="text-code-brown">"fake windows os (beta)"</span>,<br/>
                <span className="text-code-yellow">{"}"}</span><br/>
                <span className="text-code-green">// if you want to see one of my projects you can check my github account in "about me" section</span>
            </pre>
        </section>
    </>);
}

export default MyProjects;