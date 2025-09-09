export default function Info() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-10">

      <h1 className="text-5xl font-extrabold text-indigo-700 text-center mb-10">
        🌱 About LifeCare
      </h1>

      <section className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">

        <p>
          <strong>LifeCare</strong> is your trusted platform empowering mental wellness and suicide prevention.  
          Through intuitive journaling, calming games, and vital awareness resources,  
          we strive to help every individual navigate their mental health journey with confidence and support.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-600 mt-10">🎯 Our Vision</h2>

        <p>
          A world where mental health is prioritized, stigma-free, and accessible to everyone.  
          Where every individual feels supported, understood, and empowered to overcome challenges.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-600 mt-10">🚀 Our Mission</h2>

        <p>
          To provide an easy-to-use platform that helps individuals track mental health,  
          learn scientifically proven strategies, and get support when needed — all in one modern web experience.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-600 mt-10">🌍 Our Approach</h2>

        <p>
          We combine simple journaling tools, interactive mind relax games, and curated awareness resources,  
          inspired by the SPRC best practices, to build a holistic mental wellness ecosystem.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-600 mt-10">✨ Why Choose LifeCare</h2>

        <ul className="list-disc pl-8 space-y-4">
          <li>📝 Easy journaling helps track emotions and reflect on personal growth.</li>
          <li>🎮 Fun and scientifically designed games to reduce stress and promote mindfulness.</li>
          <li>📚 Backed by trusted awareness resources focusing on mental health and suicide prevention.</li>
          <li>🌐 Simple, clean, and accessible design focused on user experience.</li>
        </ul>

        <p className="font-semibold text-indigo-600 mt-8 text-center text-xl">
          “Because mental wellness is a journey, and we walk it with you.”
        </p>
      </section>

      <footer className="mt-28 text-gray-500 text-sm text-center bg-gray-800 py-6 rounded-t-lg w-full">
        © {new Date().getFullYear()} LifeCare — Empowering mental wellness globally.
      </footer>
    </div>
  );
}
