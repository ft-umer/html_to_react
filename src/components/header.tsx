import { useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await fetch('http://localhost:5000/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          setIsAuthenticated(true);
        } else {
          console.error('Failed to fetch user data');
        }
      }
    };

    fetchUserData();
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser({ name: '', email: '' }); // Clear user data
    navigate('/login');
  };

  return (
    <header className="shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/Logo-black.png" alt="Logo" height="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item px-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/rent-space">
                  Rent your space
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/help">
                  Help
                </Link>
              </li>
              {isAuthenticated && (
                <li className="nav-item dropdown border-start ps-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.name}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="dropdown-item">
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              )}
              {!isAuthenticated && (
                <li className="nav-item px-3">
                  <Link to="/login" className="btn btn-dark px-4">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
