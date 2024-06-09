import { Routes, Route } from 'react-router-dom';
import RentSpace from './components/RentSpace';
import Services from './components/Services';
import Help from './components/Help';
import Profile from './components/Profile';
import Login from './components/login'; // Correct import
import SignUp from './components/SignUp'; // Correct import
import './index.css';
import './App.css';
import MainContent from './components/home'; // Correct import
import Admin from './components/Admin';
import ProtectedRoute from './components/protectedRoute'; // Correct import

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/rent-space" element={<ProtectedRoute element={RentSpace} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* Use lowercase for consistency */}
        <Route path="/admin" element={<Admin />} /> {/* Use lowercase for consistency */}
      </Routes>
    </div>
  );
};

export default App;
