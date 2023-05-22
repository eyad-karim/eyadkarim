import Image from "next/image";
import Tag from "../tag";
function HeroSection() {
    return (<>
        <section className='bg-blue-dark p-5'>
            <div className='container m-auto flex flex-col gap-2'>
                <h2 className="text-[2rem] text-white">Eyad Karim</h2>
                <h3 className="text-[1.6rem] text-blue-light">Front-end developer</h3>
                <div className="flex flex-row gap-2 flex-wrap">
                    <Tag href="#" target="" className={"border-blue-light bg-blue-dark"}>HTML</Tag>
                    <Tag href="#" target="" className={"border-blue-light bg-blue-dark"}>CSS</Tag>
                    <Tag href="#" target="" className={"border-blue-light bg-blue-dark"}>Javascript</Tag>
                    <Tag href="#" target="" className={"border-blue-light bg-blue-dark"}>NextJs</Tag>
                </div>
            </div>
        </section>
    </>);
}

export default HeroSection;