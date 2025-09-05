export default function Navbar() {
  return (
    <nav className="min-w-screen bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold">MyApp</h1>
        
        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-blue hover:text-black">Home</a>
          </li>
          <li>
            <a href="/journaling" className="text-blue hover:text-black">journal</a>
          </li>
          <li>
            <a href="/login" className="text-blue hover:text-black">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
