
export default function Footer() {
  return (
    <footer className="font-Lexend flex flex-row h-full py-28 mx-8">
      <div className="flex flex-row w-full justify-around">
        <div className="flex flex-row items-center text-center border space-x-10">
          <h1 className="text-white font-bold text-6xl">PlanetU</h1>
          <h2 className="text-gray-400 text-4xl">Create Your Own Digital Paradise and change the world!</h2> 
        </div>
        <div className="flex flex-col text-white items-center text-center">
          <p className="text-4xl mb-2">Register Now!</p>
          <button id="cola">
            Registro
          </button>
        </div>
      </div>
    </footer>
  );
}
