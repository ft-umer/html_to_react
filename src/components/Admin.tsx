import { Link } from "react-router-dom";


const Admin = () => {
    return(
        <main>
        <section className="py-5">
            <div className="container">
                <h1 className="text-center mb-5"> Admin </h1>
                <div className="col-lg-5 col-md-6 col-sm-8 mx-auto">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <form action="" method="post">
                                <div className="mb-3">
                                    <input name="email" type="email" className="form-control form-control-lg"
                                        placeholder="E-Mail" />
                                </div>
                                <div className="mb-3">
                                    <input name="password" type="password" className="form-control form-control-lg"
                                        placeholder="Password" />
                                </div>
                                <div className="mt-5">
                                    <button className="btn btn-dark w-100" name="Admin"> Login </button>
                                </div>
                                <div className="py-3 text-center">
                                    <p className="m-0"><Link to ="/login" className="text-decoration-underline">User Login</Link>
                                    </p>
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

export default Admin;