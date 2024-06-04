import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      localStorage.setItem('token', data.token);
      navigate('/'); // Adjust the route as necessary
    } else {
      alert(data.message);
    }
  };

  return (
    <main>
      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-5"> Login </h1>
          <div className="col-lg-5 col-md-6 col-sm-8 mx-auto">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input name="email" type="email" className="form-control form-control-lg"
                      placeholder="E-Mail" onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <input name="password" type="password" className="form-control form-control-lg"
                      placeholder="Password" onChange={handleChange} required />
                  </div>
                  <div className="mt-5">
                    <button className="btn btn-dark w-100" type="submit"> Login </button>
                  </div>
                  <div className="py-3 text-center">
                    <p className="m-0"><Link to="/Admin" className="text-decoration-underline">Admin Login</Link></p>
                    <p className="m-0">Don't have an account? <Link to="/SignUp" className="text-decoration-underline">Signup</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
