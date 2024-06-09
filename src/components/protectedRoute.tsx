// ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  console.log('ProtectedRoute:', { token, isAuthenticated }); // Debugging log

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
