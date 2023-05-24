function Contact() {
    return (<>
        <section className="container mx-auto p-5 my-4 flex justify-center items-center">
            <form action="/api/form" method="post" className="flex flex-col gap-3 bg-white border-[1px] border-blue-light p-5 rounded-lg">
                <label htmlFor="first">first name</label>
                <input
                    type="text"
                    id="first"
                    name="first"
                    required
                    className="input"
                />
                <label htmlFor="last">last name:</label>
                <input type="text" id="last" name="last" required  className="input"/>
                <button type="submit" className="button">Submit</button>
            </form>
        </section>
    </>);
}

export default Contact;