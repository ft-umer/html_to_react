const Help = () => {
    return (
        <main>
        <section className="banner">
            <div className="container">
                <h2 className="text-white">Help</h2>
            </div>
        </section>
        <section className="py-5">
            <div className="container py-4">
                <div className="row flex-md-row flex-column-reverse">
                    <div className="col-md-6 col-12">
                        <h1>Have A Question?<br /> Reach Out To Us!</h1>
                        <div className="mt-4">
                            <div className="d-flex py-2">
                                <i className="fa fa-phone"></i> <a href="tel:+44 074568971" className="ps-4">+44
                                    074568971</a>
                            </div>
                            <div className="d-flex py-2">
                                <i className="fa fa-envelope"></i> <a href="mailto:help@sparepark.com"
                                    className="ps-4">help@sparepark.com</a>
                            </div>
                            <div className="d-flex py-2">
                                <i className="fa fa-map-marker"></i><span className="ps-4">27 Fanshawe Crescent, <br /> RM9 5ER,<br /> London, UK</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-md-0 mb-4">
                        <h3 className="mb-3 fw-light"> Send a message </h3>
                        <form action="" method="post">
                            <div className="mb-3">
                                <input name="text" type="name" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <input name="email" type="email" className="form-control" placeholder="Your E-Mail" />
                            </div>
                            <div className="mb-3">
                                <textarea name="password" className="form-control" placeholder="Your Message" rows={4}></textarea>
                            </div>
                            <div className="mt-5">
                                <button className="btn btn-dark w-100"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="mb-3">FAQ</h1>
                    <div className="py-2">
                        <h4>Do you have an app?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis saepe
                            pariatur non maxime, dicta praesentium assumenda cupiditate a molestias quam, ipsam
                            aliquam temporibus harum magnam officiis. Provident, dolorum laudantium.</p>
                    </div>
                    <div className="py-2">
                        <h4>How do I pay</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis saepe
                            pariatur non maxime, dicta praesentium assumenda cupiditate a molestias quam, ipsam
                            aliquam temporibus harum magnam officiis. Provident, dolorum laudantium.</p>
                    </div>
                    <div className="py-2">
                        <h4>How much do you charge</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis saepe
                            pariatur non maxime, dicta praesentium assumenda cupiditate a molestias quam, ipsam
                            aliquam temporibus harum magnam officiis. Provident, dolorum laudantium.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Help