import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Tournament() {
  const [bracket, setBracket] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tournament/bracket")
      .then((res) => setBracket(res.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/matches")
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!bracket) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Loading Tournament...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold mb-10">
          🏆 Double Elimination Tournament
        </h1>

        {/* Winners Bracket */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Winners Bracket
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {bracket.winnersBracket.map((match) => {
              const result = results.find(
                (r) =>
                  r.teamA === match.teamA &&
                  r.teamB === match.teamB
              );

              return (
                <div
                  key={match.match}
                  className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl"
                >
                  <h3 className="mb-4 text-purple-400 font-bold">
                    Match {match.match}
                  </h3>

                  <div
                    className={`p-3 rounded-xl mb-3 text-center ${
                      result?.winner === match.teamA
                        ? "bg-green-600"
                        : "bg-slate-800"
                    }`}
                  >
                    {match.teamA}
                  </div>

                  <div className="text-center my-2 font-bold">
                    VS
                  </div>

                  <div
                    className={`p-3 rounded-xl text-center ${
                      result?.winner === match.teamB
                        ? "bg-green-600"
                        : "bg-slate-800"
                    }`}
                  >
                    {match.teamB}
                  </div>

                  {result && (
                    <div className="mt-5 text-center border-t border-slate-700 pt-4">
                      <p className="text-green-400 font-bold text-lg">
                        Winner: {result.winner}
                      </p>

                      <p className="text-slate-300">
                        Score: {result.scoreA} - {result.scoreB}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Losers Bracket */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-red-400 mb-6">
            Losers Bracket
          </h2>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            Teams that lose in Winners Bracket will appear here.
          </div>
        </div>

        {/* Grand Final */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Grand Final
          </h2>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            Winner of Winners Bracket vs Winner of Losers Bracket
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tournament;