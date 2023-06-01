function HeroSection() {
    return (<>
        <section className='bg-blue-dark text-white py-[100px] flex items-center' style={{minHeight:"100vh"}}>
            <div className='container mx-auto'>
                <h3 className="text-[1.4em] font-semibold">Eyad Karim</h3>
                <h2 className="text-[3rem] text-blue-light font-bold">Front End Developer</h2>
                <h3 className="text-[2em] mb-4">creating projects to learn</h3>
                <button className="button">About me</button>
            </div>
        </section>
    </>);
}

export default HeroSection;