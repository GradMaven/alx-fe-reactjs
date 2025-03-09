import { Navigate } from "react-router-dom";
import Auth from "../auth";

const ProtectedRoute = ({ children }) => {
  return Auth.isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
