import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12">

      {user && (
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-indigo-700">
            👋 Hi, {user.name}!
          </h1>

          <p className="text-xl text-gray-700">
            Welcome back to LifeCare — your mental wellness companion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Link to="/journaling" className="bg-blue-600 text-white p-6 rounded-lg shadow hover:bg-blue-700 transition text-2xl">
              📝 Write Journal
            </Link>

            <Link to="/profile" className="bg-green-500 text-white p-6 rounded-lg shadow hover:bg-green-600 transition text-2xl">
              👤 View Profile
            </Link>

            <Link to="/games" className="bg-purple-600 text-white p-6 rounded-lg shadow hover:bg-purple-700 transition text-2xl">
              🎮 Play Mind Relax Games
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
