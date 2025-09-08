
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar.jsx";

import Home from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import LoginPage from "./pages/loginpage.jsx";
import Register from "./pages/register.jsx";
import Journaling from "./pages/journaling.jsx";
import Games from "./pages/games.jsx";
import Profile from "./pages/profile.jsx";  
import Dashboard from "./pages/dashboard.jsx";
import Footer from './pages/footer.jsx';

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
             <Route path="/about" element={<About />} />
             <Route path="/dashboard" element={<Dashboard />} />  
             <Route path="/profile" element={<Profile />} />
             <Route path="/journaling" element={<Journaling />} />
             <Route path="/games" element={<Games />} />
         </Routes>

        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
