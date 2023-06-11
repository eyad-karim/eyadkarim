import Link from "next/link";

function HeroSection() {
    return (<>
        <section className='hero-section bg-blue-dark text-white py-[100px] flex items-center' style={{minHeight:"100vh"}}>
            <div className='container mx-auto'>
                <h3 className="text-[1.4em] font-semibold">Eyad Karim</h3>
                <h2 className="text-[3rem] text-blue-light font-bold">Front End Developer</h2>
                <h3 className="text-[2em] mb-4">creating projects to learn</h3>
                <Link href="#about-me"><button className="button">About me</button></Link>
            </div>
        </section>
    </>);
}

export default HeroSection;