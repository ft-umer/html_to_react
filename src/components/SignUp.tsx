import { Link } from "react-router-dom";

const SignUp = () => {
    return(
        <main>
        <section className="py-5">
            <div className="container">
                <h1 className="text-center mb-5"> Signup </h1>
                <div className="col-lg-5 col-md-6 col-sm-8 mx-auto">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <form action="" method="post">
                                <div className="mb-3">
                                    <input type="text" required name="name" className="form-control form-control-lg"
                                        placeholder="Fullname" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" required name="email" className="form-control form-control-lg"
                                        placeholder="E-Mail" />
                                </div>
                                <div className="mb-3">
                                    <select name="type" required className="form-control form-control-lg">
                                        <option value="" selected disabled>Select user type</option>
                                        <option value="Driver">Driver</option>
                                        <option value="Owner">Space Owner</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="password" required name="password" className="form-control form-control-lg"
                                        placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" required name="confirm_password"
                                        className="form-control form-control-lg" placeholder="Confirm Password" />
                                </div>
                                <div className="mt-5">
                                    <button className="btn btn-dark w-100" name="signup"> Signup </button>
                                </div>
                                <div className="py-3 text-center">
                                    <p className="m-0">Already have an account? <Link to ="/login"
                                            className="text-decoration-underline">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default SignUp;