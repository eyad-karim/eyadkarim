function Contact() {
    return (<>
        <section className="container mx-auto py-5">
            <h2 className="text-[1.5rem]">Contact</h2>
            <from method="post">
                <lable for="name">Name</lable>
                <input id="name" name="name" type="text" placeholder="Enter your name" className="input" />
                <br/>
                <lable for="email">Email</lable>
                <input id="email" name="email" type="email" placeholder="Enter your email" className="input" />
                <br/>
                <lable for="phonenumber">Phone number</lable>
                <input id="phonenumber" name="phonenumber" type="text" placeholder="Enter your phone number" className="input" />
                <br/>
                <button type="submit" className="button">Submit</button>
            </from>
        </section>
    </>);
}

export default Contact;