function AboutMeSection() {
    var d = new Date()
    return (<>
        <section className="code section" id="about-me">
            <h3 className="title">About me</h3>
            <pre>
                <span className="text-code-blue">const</span> <span className="text-code-sky">person</span> = <span className="text-code-yellow">{"{"}</span><br/>
                {"  "}<span className="text-code-sky">firstname</span> : <span className="text-code-brown">{"\"Eyad\""}</span>,<br/>
                {"  "}<span className="text-code-sky">lastname</span> : <span className="text-code-brown">{"\"Karim\""}</span>,<br/>
                {"  "}<span className="text-code-sky">nickname</span> : <span className="text-code-brown">{"\"ek\""}</span>,<br/>
                {"  "}<span className="text-code-sky">age</span> : <span className="text-code-lightgreen">{d.getFullYear() - 2009}</span>,<br/>
                {"  "}<span className="text-code-sky">gender</span> : <span className="text-code-brown">{"\"male\""}</span>,<br/>
                {"  "}<span className="text-code-sky">skills</span> : <span className="text-code-blue">{"["}</span><br/>
                {"      "}<span className="text-code-brown">{"\"HTML\""}</span>,<br/>
                {"      "}<span className="text-code-brown">{"\"CSS\""}</span>,<br/>
                {"      "}<span className="text-code-brown">{"\"Javascript\""}</span>,<br/>
                {"      "}<span className="text-code-brown">{"\"React\""}</span>,<br/>
                {"      "}<span className="text-code-brown">{"\"NextJS\""}</span>,<br/>
                {"      "}<span className="text-code-brown">{"\"Python\""}</span>,<br/>
                {"  "}<span className="text-code-blue">{"]"}</span>,<br/>
                {"  "}<span className="text-code-sky">accounts</span> : <span className="text-code-blue">{"{"}</span><br/>
                {"      "}<span className="text-code-sky">google</span> : <span className="text-code-brown">{"\"eyad.karim.r3@gmail.com\""}</span>,<br/>
                {"      "}<span className="text-code-sky">github</span> : <span className="text-code-brown">{"\"eyad-karim\""}</span>, <span className="text-code-green">{"// github.com/eyad-karim"}</span><br/>
                {"  "}<span className="text-code-blue">{"}"}</span>,<br/>
                <span className="text-code-yellow">{"}"}</span>
            </pre>
        </section>
    </>);
}

export default AboutMeSection;
