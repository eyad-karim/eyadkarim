function Contact() {
    return (<>
        <section className="container mx-auto p-5 h-[85vh] flex justify-center items-center">
            <from method="post" className="bg-light p-10 rounded-lg">
                <h2 className="text-[1.5rem]">Contact</h2>
                <lable for="name">Name:</lable>
                <input required  id="name" name="name" type="text" placeholder="Enter your name" className="input" i />
                <br/>
                <lable for="email">Email:</lable>
                <input required  id="email" name="email" type="email" placeholder="Enter your email" className="input" />
                <br/>
                <lable for="phonenumber">Phone number:</lable>
                <input required id="phonenumber" name="phonenumber" type="text" placeholder="Enter your phone number" className="input" />
                <br/>
                <button type="submit" className="button">Submit</button>
            </from>
        </section>
    </>);
}

export default Contact;