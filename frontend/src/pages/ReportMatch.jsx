import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function ReportMatch() {
  const [brackets, setBrackets] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState("");

  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");

  const [scoreA, setScoreA] = useState("");
  const [scoreB, setScoreB] = useState("");

  const [screenshot, setScreenshot] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tournament/bracket")
      .then((res) =>
  setBrackets(res.data.winnersBracket)
)
      .catch((err) => console.log(err));
  }, []);

  const handleMatchSelect = (e) => {
    const matchIndex = e.target.value;

    setSelectedMatch(matchIndex);

    if (matchIndex === "") {
      setTeamA("");
      setTeamB("");
      return;
    }

    const match = brackets[matchIndex];

    setTeamA(match.teamA);
    setTeamB(match.teamB);
  };

  const submitMatch = async () => {
    try {
      const formData = new FormData();

      formData.append("teamA", teamA);
      formData.append("teamB", teamB);
      formData.append("scoreA", scoreA);
      formData.append("scoreB", scoreB);

      if (screenshot) {
        formData.append("screenshot", screenshot);
      }

      const token = localStorage.getItem("token");

const res = await axios.post(
  "http://localhost:5000/matches/report",
  formData,
  {
    headers: {
      Authorization: token,
    },
  }
);

alert(`Winner: ${res.data.winner}`);

      setSelectedMatch("");
      setTeamA("");
      setTeamB("");
      setScoreA("");
      setScoreB("");
      setScreenshot(null);

      window.location.href = "/tournament";
    } catch (err) {
      console.log(err);
      alert("Failed to submit match");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-2xl mx-auto py-12 px-4">

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">

          <h1 className="text-4xl font-bold text-center mb-8">
            📊 Report Match
          </h1>

          <div className="space-y-5">

            <select
              value={selectedMatch}
              onChange={handleMatchSelect}
              className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700"
            >
              <option value="">
                Select Match
              </option>

              {brackets.map((match, index) => (
                <option key={index} value={index}>
                  {match.teamA} vs {match.teamB}
                </option>
              ))}
            </select>

            <input
              value={teamA}
              readOnly
              className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700"
            />

            <input
              value={teamB}
              readOnly
              className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700"
            />

            <input
              type="number"
              placeholder="Score A"
              value={scoreA}
              onChange={(e) => setScoreA(e.target.value)}
              className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700"
            />

            <input
              type="number"
              placeholder="Score B"
              value={scoreB}
              onChange={(e) => setScoreB(e.target.value)}
              className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700"
            />

            <input
              type="file"
              onChange={(e) => setScreenshot(e.target.files[0])}
              className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700"
            />

            <button
              onClick={submitMatch}
              className="w-full bg-purple-600 hover:bg-purple-700 transition p-4 rounded-xl font-bold"
            >
              Submit Match Result
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ReportMatch;