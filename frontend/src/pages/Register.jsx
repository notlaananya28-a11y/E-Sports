import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      await axios.post(
        "http://localhost:5000/auth/register",
        {
          username,
          email,
          password,
        }
      );

      alert("Registration Successful");
      navigate("/");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-96">

        <h1 className="text-3xl font-bold mb-5">
          Register
        </h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

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
          onClick={registerUser}
          className="bg-green-600 text-white w-full p-2 rounded"
        >
          Register
        </button>

        <p className="mt-3">
          Already Registered?
          <Link className="text-blue-600 ml-2" to="/">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;