import { useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (callback) => {
    setIsAuthenticated(true);
    setTimeout(callback, 100); // Simulate an async login
  };

  const logout = (callback) => {
    setIsAuthenticated(false);
    setTimeout(callback, 100);
  };

  return { isAuthenticated, login, logout };
};
