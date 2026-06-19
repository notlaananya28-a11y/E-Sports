import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Tournament() {

  const [bracket, setBracket] =
    useState(null);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/tournament/bracket"
      )
      .then((res) =>
        setBracket(res.data)
      );
  }, []);

  if (!bracket)
    return <div>Loading...</div>;

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

            {bracket.winnersBracket.map(
              (match) => (
                <div
                  key={match.match}
                  className="bg-slate-900 p-6 rounded-2xl"
                >
                  <h3 className="mb-3">
                    Match {match.match}
                  </h3>

                  <div className="bg-slate-800 p-3 rounded mb-2">
                    {match.teamA}
                  </div>

                  <div className="text-center my-2">
                    VS
                  </div>

                  <div className="bg-slate-800 p-3 rounded">
                    {match.teamB}
                  </div>

                </div>
              )
            )}

          </div>

        </div>

        {/* Losers Bracket */}

        <div className="mb-12">

          <h2 className="text-3xl font-bold text-red-400 mb-6">
            Losers Bracket
          </h2>

          <div className="bg-slate-900 p-8 rounded-2xl">

            Losers will appear here after
            future rounds.

          </div>

        </div>

        {/* Grand Final */}

        <div>

          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Grand Final
          </h2>

          <div className="bg-slate-900 p-8 rounded-2xl">

            Winner of Winners Bracket
            vs
            Winner of Losers Bracket

          </div>

        </div>

      </div>

    </div>
  );
}

export default Tournament;