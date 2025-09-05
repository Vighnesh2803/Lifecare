export default function Games() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">🎮 Mind Relax Games</h1>
      <p className="mt-4 text-gray-600">Choose and play games to relax your mind.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
          <h2 className="text-xl font-semibold">Tic Tac Toe</h2>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            Play
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
          <h2 className="text-xl font-semibold">Memory Game</h2>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            Play
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
          <h2 className="text-xl font-semibold">Breathing Exercise</h2>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
