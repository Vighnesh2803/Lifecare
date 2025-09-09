
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar.jsx";
import Footer from "./pages/footer.jsx";
import Home from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import Info from "./pages/info.jsx";
import LoginPage from "./pages/loginpage.jsx";
import Register from "./pages/register.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Journaling from "./pages/journaling.jsx";
import Games from "./pages/games.jsx";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }) {
  return (
    <div role="alert" className="p-10 text-center">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
      <pre className="mt-4 text-gray-800">{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <Router>   {/* ✅ Only ONE Router */}
      
      <Navbar />  {/* ✅ Navbar is global and shown on every page */}

      <main className="flex-grow min-h-[calc(100vh-160px)]">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/journaling" element={<Journaling />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </ErrorBoundary>
      </main>

      <Footer />  {/* ✅ Footer is global and always at bottom */}
    </Router>
  );
}

export default App;
