export default function Home() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-500 text-white animate-fade-in flex flex-col items-center justify-center px-6 py-12">

      {/* Title + Tagline */}
      <h1 className="text-5xl font-extrabold mb-8 drop-shadow-2xl text-yellow-300">
        🚀 LifeCare — Empowering Mental Wellness
      </h1><br></br>

      <p className="text-3xl max-w-4xl mb-14 leading-relaxed text-gray-100 text-center">
        Your trusted companion for mental health support —  
        write journals, play calming games, and explore suicide prevention resources.  
        Take the first step towards well-being today.
      </p>

      <div className="space-x-10">
        <a href="/login" className="bg-yellow text-purple-800 font-bold px-12 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1 text-2xl">
          🚀 Get Started
        </a>

        <a href="/about" className="bg-yellow text-purple-800 font-bold px-12 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1 text-2xl">
          🌟 Learn More About SPRC
        </a>
      </div>

      {/* 📊 Statistics */}
      <div className="mt-20 text-center max-w-5xl">
        <h3 className="text-4xl font-semibold text-white mb-8">
          📊 Why Mental Health Matters
        </h3><br></br>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-blue-600 p-6 rounded-lg shadow text-center">
            <h4 className="text-2xl font-bold">1 in 4</h4>
            <p>People experience mental health issues yearly.</p>
          </div>
          <div className="bg-white text-blue-600 p-6 rounded-lg shadow text-center">
            <h4 className="text-2xl font-bold">75%</h4>
            <p>Don’t seek help due to social stigma.</p>
          </div>
          <div className="bg-white text-blue-600 p-6 rounded-lg shadow text-center">
            <h4 className="text-2xl font-bold">50%</h4>
            <p>Of suicides are preventable with awareness.</p>
          </div>
        </div>
      </div>

      {/* 🎥 Video Awareness */}
      <div className="mt-20 text-center">
        <h3 className="text-4xl font-semibold text-white mb-6">
          🎥 Why Mental Health is Important
        </h3><br></br>
        <iframe
          className="w-full max-w-3xl h-64 rounded-lg shadow-lg"
          src="https://www.https://www.youtube.com/watch?v=dpWuf96-G7g&rco=1"
          title="Mental Health Awareness"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* 💬 Testimonials */}<br></br>
      <div className="mt-20 text-center max-w-5xl">
        <h3 className="text-4xl font-semibold text-white mb-8">
          🌟 What Our Users Say
        </h3><br></br>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow text-center">
            "LifeCare saved me during tough times."
            <p className="mt-4 font-semibold">— Rahul S.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow text-center">
            "Simple yet powerful platform for well-being."
            <p className="mt-4 font-semibold">— Priya M.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow text-center">
            "Calming games help me relax every day."
            <p className="mt-4 font-semibold">— Ankit R.</p>
          </div>
        </div>
      </div><br></br>

      {/* Footer */}
      <footer className="mt-28 text-gray-300 text-lg text-center bg-gray-800 py-6 rounded-t-lg w-full">
        © {new Date().getFullYear()} LifeCare — Empowering mental wellness globally.
      </footer>

    </section>  
  );
}

  
