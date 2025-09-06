
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar.jsx";

import Home from "./pages/homepage.jsx";
import LoginPage from "./pages/loginpage.jsx";
import Register from "./pages/register.jsx";
import Journaling from "./pages/journaling.jsx";
import Games from "./pages/games.jsx";
import Profile from "./pages/profile.jsx";  // ✅ Make sure this line is added

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/journaling" element={<Journaling />} />
            <Route path="/games" element={<Games />} />
            <Route path="/profile" element={<Profile />} /> {/* Profile route */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
