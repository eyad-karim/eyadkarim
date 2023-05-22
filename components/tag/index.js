import Link from "next/link";

function Tag({children,href,target,className}) {
    return (<>
        <div className={"border-[1px] py-[0.5px] px-3 rounded-full shadow-lg w-fit " + className}>
            <Link className="text-blue-light" href={href} target={target}>{children}</Link>
        </div>
    </>);
}

export default Tag;