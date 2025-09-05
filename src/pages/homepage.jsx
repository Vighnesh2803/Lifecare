export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">
          Welcome to LifeCare
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
          A simple React app with a clean design. Explore the About page to know
          more, or login to get started.
        </p>
        <div className="space-x-4">
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Learn More
          </a>
          <a
            href="/login"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-300"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
