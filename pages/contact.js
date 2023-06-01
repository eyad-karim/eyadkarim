import Head from "next/head";
import { useState } from "react";

function Contact() {
    const [inputVal,setInputVal] = useState('')
    const [textAreaVal,setTextAreaVal] = useState('')
    const [msgs,setMsgs] = useState([])
    
    const fetchMsgs = async () => {
        const res = await fetch("/api/data")
        const data = await res.json()
        setMsgs(data)
    }
    

    const handelSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("/api/data", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({user:inputVal,msg:textAreaVal})
        })
        const data = await res.json()
        setTextAreaVal("")
    }

    return (<>
        <Head>
            <title>Contact</title>
        </Head>
        <section className="container mx-auto py-[100px] my-4">
            <form onSubmit={handelSubmit} className="flex flex-col gap-3 bg-white border-[1px] border-blue-light p-5 rounded-lg">
                <h3 className="text-[1.5rem]">Contact me</h3>
                <div className="flex flex-row gap-2 items-center">
                    <label htmlFor="username">username</label>
                    <input
                        value={inputVal}
                        type="text"
                        id="username"
                        name="username"
                        required
                        className="input"
                        placeholder="username"
                        onChange={e => setInputVal(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="msg">message</label>
                    <textarea
                        value={textAreaVal}
                        id="msg"
                        name="msg"
                        required
                        className="input"
                        placeholder="message"
                        onChange={e => setTextAreaVal(e.target.value)}
                    >
                    </textarea>
                </div>
                <button type="submit" className="button">Submit</button>
            </form>
        </section>
        <section className="container mx-auto my-4">
            <button onClick={fetchMsgs} className="button mb-3">show messages</button>
            <div className="overflow-auto p-2" style={{maxHeight:"80vh"}}>
                {msgs.map((item) => {
                    return(
                        <div key={item.id} className="flex flex-col gap-2 bg-light p-3 border-[1] border-black rounded-md mb-2">
                            <span className="text-blue-light">{item.user}</span>
                            <p className="break-all">{item.msg}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    </>);
}

export default Contact;