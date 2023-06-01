function AboutMeSection() {
    var d = new Date()
    return (<>
        <section className="bg-blue-dark py-[100px]">
            <div className="container mx-auto text-white">
                <h3 className="text-[1.5rem] text-center font-bold my-3 text-blue-light">About me</h3>
                <p>I learned coding when I was 10, I started with HTML, CSS and Javascript. I am {d.getFullYear() - 2009} now and I learn by creating projects</p>
            </div>
        </section>
    </>);
}

export default AboutMeSection;