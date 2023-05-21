import Image from "next/image";
function HeroSection() {
    return (<>
        <section className='bg-blue p-5'>
            <div className='container m-auto flex flex-row gap-2 items-center justify-start'>
                <div className="col-span-3 p-2">
                    <Image alt="logo" src="ek.svg" width={180} height={180} />
                </div>
                <div>
                    <h2 className="text-[2rem] text-white">Eyad Karim</h2>
                </div>
            </div>
        </section>
    </>);
}

export default HeroSection;