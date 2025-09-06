import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";  // Redirect to login
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-yellow-300">
          LifeCare
        </Link>

        <ul className="flex space-x-6 items-center">

          {/* Always visible public links */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* Authenticated user links */}
          {user && (
            <>
              <li><Link to="/journaling">Journaling</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li>
                <Link to="/profile" className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-yellow-400 text-purple-800 rounded-full flex items-center justify-center font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-semibold">Hi, {user.name}</span>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
