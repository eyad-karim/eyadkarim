function Contact() {
    return (<>
        <section className="container mx-auto py-5">
            <div className="flex justify-center my-56">
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
            </div>
        </section>
    </>);
}

export default Contact;