import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RentSpace from './components/RentSpace';
import Services from './components/Services';
import Help from './components/Help';
import Profile from './components/Profile';
import Login from './components/login';
import SignUp from './components/SignUp';
import './index.css';
import './App.css';
import MainContent from './components/home';
import Admin from './components/Admin';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/rent-space" element={<RentSpace />} />
      <Route path="/services" element={<Services />} />
      <Route path="/help" element={<Help />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Admin" element={<Admin />} />
    </Routes>
  </div>
  );
};

export default App;
