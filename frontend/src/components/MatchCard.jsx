function MatchCard({ match }) {
  return (
    <div className="border rounded-lg p-4 shadow">

      <h2 className="font-bold text-xl mb-2">
        {match.teamA}
      </h2>

      <p>VS</p>

      <h2 className="font-bold text-xl mt-2">
        {match.teamB}
      </h2>

      <p className="mt-3">
        Winner: {match.winner}
      </p>

    </div>
  );
}

export default MatchCard;