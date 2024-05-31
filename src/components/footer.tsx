
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-4 bg-dark text-white">
            <div className="container">
                <div
                    className="d-flex justify-content-between flex-wrap align-items-md-center align-items-start flex-md-row flex-column">
                    <img src="public/Logo-white.png" alt="Logo" height="50" />
                        <ul className="d-flex text-white p-0 m-0 flex-sm-row flex-column">
                            <li className="px-sm-3 ps-0 py-2">
                                <Link className="px-1" to ="/">Home</Link>
                            </li>
                            <li className="px-sm-3 ps-0 py-2">
                                <Link className="px-1" to ="/RentSpace">Rent your space</Link>
                            </li>
                            <li className="px-sm-3 ps-0 py-2">
                                <Link className="px-1" to ="/Services">Services</Link>
                            </li>
                            <li className="px-sm-3 ps-0 py-2">
                                <Link className="px-1" to ="/Help">Help</Link>
                            </li>
                            <li className="px-sm-3 ps-0 py-2">
                                <Link className="px-1" to ="#">Privacy Policy</Link>
                            </li>
                        </ul>
                </div>
                <div className="d-flex pt-3 align-items-baseline justify-content-between flex-sm-row flex-column-reverse">
                    <p className="text-secondary m-0 copyright">&copy; 2023 Spare Park. All rights reserved.</p>
                    <Link to ="#" className="mb-sm-0 mb-3"><img src="public/google-play.png" alt="Download button" height="50" /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
