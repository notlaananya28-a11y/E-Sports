import { useEffect, useState } from "react";
import axios from "axios";

function Bracket() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tournament/bracket")
      .then((res) => {
        setMatches(res.data);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6">

      {matches.map((match) => (
        <div
          key={match.match}
          className="border p-5 rounded-lg shadow"
        >
          <h2 className="font-bold text-xl">
            Match {match.match}
          </h2>

          <p>{match.teamA}</p>

          <p className="font-bold">
            VS
          </p>

          <p>{match.teamB}</p>
        </div>
      ))}

    </div>
  );
}

export default Bracket;