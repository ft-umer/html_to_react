import { Navigate } from 'react-router-dom';
import React from 'react';

interface ProtectedRouteProps {
  element: React.ComponentType<any>; // Explicitly define the type of 'element' prop
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  console.log('ProtectedRoute:', { token, isAuthenticated }); // Debugging log

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
