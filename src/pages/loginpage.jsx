import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.name) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 px-6">

      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-xl shadow-2xl max-w-md w-full text-center"
      >
        <h2 className="text-5xl font-bold text-indigo-600 mb-6"> LifeCare Login</h2>

        <p className="text-gray-600 mb-8">
          Welcome back! Enter your email to continue your mental wellness journey.
        </p>

        <input
          type="email"
          placeholder="Your email address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border rounded-lg mb-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-indigo-700 w-full"
        >
          🚀 Login
        </button>

        <p className="mt-6 text-gray-500">
          Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Register now</a>
        </p>
      </form>

    </div>
  );
}
