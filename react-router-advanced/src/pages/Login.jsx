import { useNavigate } from "react-router-dom";
import Auth from "../auth";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    Auth.login(() => navigate("/profile"));
  };

  return (
    <div className="text-center mt-6">
      <h2>Please Login</h2>
      <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </div>
  );
};

export default Login;
