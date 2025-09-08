export default function About() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-12 flex flex-col items-center">

      <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
        🌱 About LifeCare
      </h1>

      <p className="text-2xl max-w-4xl text-center mb-12 leading-relaxed">
        LifeCare is your trusted platform empowering mental wellness and suicide prevention.  
        Through intuitive journaling, calming games, and vital awareness resources, we strive to help every individual navigate their mental health journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">

        <div className="bg-white text-indigo-700 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition">
          <h2 className="text-3xl font-bold mb-4">🎯 Our Vision</h2>
          <p className="text-lg">
            A world where mental health is prioritized, stigma-free, and accessible to everyone.
          </p>
        </div>

        <div className="bg-white text-indigo-700 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition">
          <h2 className="text-3xl font-bold mb-4">🚀 Our Mission</h2>
          <p className="text-lg">
            To provide an easy-to-use platform that helps individuals track mental health, learn strategies, and get support when needed.
          </p>
        </div>

        <div className="bg-white text-indigo-700 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition">
          <h2 className="text-3xl font-bold mb-4">🌐 Our Approach</h2>
          <p className="text-lg">
            We combine journaling, interactive games, and awareness resources in one modern platform to promote self-care and prevention.
          </p>
        </div>

      </div>

      <div className="mt-16">
        <a
          href="/login"
          className="bg-yellow-400 text-indigo-800 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1 text-2xl"
        >
          🚀 Start Your Journey Now
        </a>
      </div>

      <footer className="mt-28 text-gray-300 text-sm text-center bg-gray-800 py-6 rounded-t-lg w-full">
        © {new Date().getFullYear()} LifeCare — Empowering mental wellness globally.
      </footer>
    </section>
  );
}
