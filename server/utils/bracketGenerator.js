function generateBracket(teams) {
  const matches = [];

  let matchNumber = 1;

  for (let i = 0; i < teams.length; i += 2) {
    matches.push({
      match: matchNumber++,
      round: "Winners Round 1",
      teamA: teams[i],
      teamB: teams[i + 1] || "BYE",
    });
  }

  return {
    winnersBracket: matches,
    losersBracket: [],
    grandFinal: [],
  };
}

module.exports = generateBracket;