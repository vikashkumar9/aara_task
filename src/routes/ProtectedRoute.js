import { Navigate } from "react-router-dom";

// Function to check authentication
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null; 
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export const PublicRoute = ({ element }) => {
  return isAuthenticated() ? <Navigate to="/" /> : element;
};
export default ProtectedRoute;
