import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Leaderboard() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/leaderboard")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-bold mb-10 text-center">
          🏆 Global Leaderboard
        </h1>

        <div className="bg-slate-900 rounded-3xl overflow-hidden border border-purple-500/30">

          <table className="w-full">

            <thead className="bg-purple-600">
              <tr>
                <th className="p-5">Rank</th>
                <th className="p-5">Team</th>
                <th className="p-5">Wins</th>
                <th className="p-5">Losses</th>
              </tr>
            </thead>

            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={team.team}
                  className="border-b border-slate-700 text-center"
                >
                  <td className="p-5">
                    #{index + 1}
                  </td>

                  <td className="p-5 font-bold">
                    {team.team}
                  </td>

                  <td className="p-5 text-green-400 font-bold">
                    {team.wins}
                  </td>

                  <td className="p-5 text-red-400 font-bold">
                    {team.losses}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Leaderboard;