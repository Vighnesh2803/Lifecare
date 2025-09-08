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
      navigate("/dashboard");  // ✅ Redirect to Dashboard after login
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-6">

      <form onSubmit={handleLogin} className="bg-white text-gray-800 p-10 rounded-lg shadow-lg space-y-6 max-w-md w-full">
        <h2 className="text-4xl font-bold text-center text-indigo-700">🚀 LifeCare Login</h2>

        <div className="flex flex-col space-y-4">
          <label className="font-semibold text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button type="submit" className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 text-xl w-full">
          🚀 Login
        </button>
      </form>

    </div>
  );
}

