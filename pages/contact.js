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
            <title>Contact page</title>
        </Head>
        <section className="container mx-auto py-[100px]">
            <div className="section">
                <h3 className="title">Contact me</h3>
                <form onSubmit={handelSubmit} className="flex flex-col gap-3">
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
                    <button type="submit" className="button ">Submit</button>
                </form>
            </div>
        </section>
        <section className="section">
            <button onClick={fetchMsgs} className="button">show messages</button>
            {msgs[0] && (
                <div className="overflow-auto p-2 mt-3" style={{maxHeight:"80vh"}}>
                    {msgs.map((item) => {
                        return(
                            <div key={item.id} className="flex flex-col gap-2 p-3 border-b-2 border-blue-light rounded-sm mb-2">
                                <span className="text-blue-light">{item.user}</span>
                                <p className="break-all">{item.msg}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </section>
    </>);
}

export default Contact;