import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !name) {
      alert("Please enter both name and email!");
      return;
    }
    const user = { name, email };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/"); // redirect to home
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Login to LifeCare
        </h2><br></br>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
