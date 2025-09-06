import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate("/login"); // If no user → force login
    }
  }, [navigate]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      {user ? (
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">👤 Your Profile</h1>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Email:</strong> {user.email}
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Go to Home
          </button>
        </div>
      ) : (
        <p className="text-red-500">Loading user info...</p>
      )}
    </div>
  );
}
