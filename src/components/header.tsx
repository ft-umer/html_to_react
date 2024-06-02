
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={`${process.env.PUBLIC_URL}/logo-black.png`} alt="Logo" height="50" />
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
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item px-3">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/rent-space">Rent your space</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/help">Help</Link>
              </li>
              <li className="nav-item dropdown border-start ps-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Syed Umer Mujahid Hassni
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">My Profile</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">Logout</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-3">
                <Link to="/login" className="btn btn-dark px-4">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
