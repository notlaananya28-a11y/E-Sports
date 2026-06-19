import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-purple-400">
            🎮 E-Sports
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-gray-300 font-medium">

          <Link
            to="/dashboard"
            className="hover:text-purple-400 transition duration-300"
          >
            Dashboard
          </Link>

          <Link
            to="/tournament"
            className="hover:text-purple-400 transition duration-300"
          >
            Tournament
          </Link>

          <Link
            to="/report"
            className="hover:text-purple-400 transition duration-300"
          >
            Report Match
          </Link>

          <Link
            to="/leaderboard"
            className="hover:text-purple-400 transition duration-300"
          >
            Leaderboard
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;