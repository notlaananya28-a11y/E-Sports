import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch {
      alert("Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg w-96">

        <h1 className="text-3xl font-bold mb-4">
          Login
        </h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Login
        </button>

        <p className="mt-3">
          New User?
          <Link
            to="/register"
            className="text-blue-600 ml-2"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;