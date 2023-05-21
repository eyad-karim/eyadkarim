import Link from "next/link";

function SOMT() {
    let colspan = "col-span-2 md:col-span-2 sm:col-span-12 "
    return (<>
        <section className="py-5 container mx-auto">
            <h3 className="text-[1.5rem]">Some of my teachers</h3>
            <div className="grid grid-cols-12 gap-2 p-2">
                <div className={colspan+" somt-card"}>
                    <Link className="text-blue" href="https://youtube.com/codezilla" target="_blank">Codezilla</Link>
                </div>
                <div className={colspan+" somt-card"}>
                    <Link className="text-blue" href="https://www.youtube.com/@ElzeroWebSchool" target="_blank">El Zero Web School</Link>
                </div>
                <div className={colspan+" somt-card"}>
                    <Link className="text-blue" href="https://www.youtube.com/@HassounaAcademy" target="_blank">Hassouna Academy</Link>
                </div>
                <div className={colspan+" somt-card"}>
                    <Link className="text-blue" href="https://www.youtube.com/@NourHomsi" target="_blank">Nour Homsi</Link>
                </div>
            </div>
        </section>
    </>);
}

export default SOMT;