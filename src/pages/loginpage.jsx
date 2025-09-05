import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    // Mock login (replace with API call)
    console.log("Login submitted:", { email, password });
    setError("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md p-10 bg-white rounded-2xl shadow-2xl hover:shadow-xl transition duration-300">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 border border-red-300 rounded-lg p-2 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:outline-none transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:outline-none transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember me + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-400"
              />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="flex items-center justify-center w-full px-4 py-2 border rounded-lg hover:bg-gray-100 transition duration-200">
          <FcGoogle className="w-5 h-5 mr-2" />
          Login with Google
        </button>

        {/* Signup */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
