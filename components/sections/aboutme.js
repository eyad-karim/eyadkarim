function AboutMeSection() {
    var d = new Date()
    return (<>
        <section className="section">
            <h3 className="text-[1.5rem] text-center font-bold my-3 text-blue-light">About me</h3>
            <p>My name is Eyad Karim. my age is {d.getFullYear() - 2009} years old. I live in Egypt. I love programming because it teaches me how a computer works and teaches me how to think properly</p>
        </section>
    </>);
}

export default AboutMeSection;