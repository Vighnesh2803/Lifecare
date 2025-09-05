export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">
        Welcome to LifeCare 🚀
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
        A place to take care of your mental wellness. Write journals, play mind relax games,
        and explore awareness resources.
      </p>
      <div className="space-x-4">
        <a
          href="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Get Started
        </a>
        <a
          href="/about"
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
