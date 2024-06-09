import { useState, useEffect } from "react";

const Profile = () => {
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/api/user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data);
            } else {
                console.error('Failed to fetch user data');
            }
        };

        fetchUserData();
    }, []);

    return (
        <main>
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-normal">My Profile</h2>

                    <div className="row py-4 align-items-center">
                        <div className="col-md-4 text-md-start text-center">
                            <img src="/user.jpeg" alt="" className="img-fluid profile-img" />
                        </div>
                        <div className="col-md-8">
                            <div className="d-flex justify-content-between pb-4 border-bottom">
                                <div>
                                    <p className="pb-2"><span className="label">Name:</span> <span className="ps-3">
                                        {user.name}
                                    </span></p>
                                    <p className="mb-0"><span className="label">E-mail:</span> <span className="ps-3">
                                        {user.email}
                                    </span></p>
                                </div>
                                <div><button className="btn btn-secondary px-5" data-bs-toggle="modal"
                                    data-bs-target="#updateModal">Edit</button></div>
                            </div>
                            <p className="pt-4"><span className="label">Password:</span> <button
                                className="btn btn-dark ms-3 px-5" data-bs-toggle="modal"
                                data-bs-target="#passwordModal">Reset</button></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Profile