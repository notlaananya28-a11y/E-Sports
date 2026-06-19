import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="px-8 py-12">
        <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 rounded-3xl p-10 shadow-2xl">
          <h1 className="text-5xl font-extrabold mb-4">
            🎮 E-Sports Tournament Manager
          </h1>

          <p className="text-lg text-gray-200">
            Organize tournaments, manage teams, report match results
            and track rankings in real-time.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:scale-105 transition">
          <div className="text-4xl mb-3">👥</div>
          <h2 className="text-gray-400">Teams</h2>
          <p className="text-4xl font-bold mt-2">4</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:scale-105 transition">
          <div className="text-4xl mb-3">⚔️</div>
          <h2 className="text-gray-400">Matches</h2>
          <p className="text-4xl font-bold mt-2">12</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:scale-105 transition">
          <div className="text-4xl mb-3">🏆</div>
          <h2 className="text-gray-400">Status</h2>
          <p className="text-2xl font-bold mt-2 text-green-400">
            Active
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:scale-105 transition">
          <div className="text-4xl mb-3">🔥</div>
          <h2 className="text-gray-400">Top Team</h2>
          <p className="text-2xl font-bold mt-2">
            Alpha
          </p>
        </div>

      </div>

      {/* Recent Matches */}
      <div className="px-8 py-10">
        <h2 className="text-3xl font-bold mb-6">
          Recent Matches
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="flex justify-between">
              <span>Alpha</span>
              <span className="text-green-400">2</span>
            </div>

            <div className="text-center my-2 text-gray-500">
              VS
            </div>

            <div className="flex justify-between">
              <span>Beta</span>
              <span className="text-red-400">1</span>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="flex justify-between">
              <span>Gamma</span>
              <span className="text-green-400">3</span>
            </div>

            <div className="text-center my-2 text-gray-500">
              VS
            </div>

            <div className="flex justify-between">
              <span>Delta</span>
              <span className="text-red-400">0</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;