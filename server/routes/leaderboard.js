const express = require("express");
const Match = require("../models/Match");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const matches = await Match.find();

    const leaderboard = {};

    matches.forEach((match) => {
      if (!match.teamA || !match.teamB) return;

      if (!leaderboard[match.teamA]) {
        leaderboard[match.teamA] = {
          team: match.teamA,
          wins: 0,
          losses: 0,
        };
      }

      if (!leaderboard[match.teamB]) {
        leaderboard[match.teamB] = {
          team: match.teamB,
          wins: 0,
          losses: 0,
        };
      }

      if (match.winner === match.teamA) {
        leaderboard[match.teamA].wins++;
        leaderboard[match.teamB].losses++;
      } else {
        leaderboard[match.teamB].wins++;
        leaderboard[match.teamA].losses++;
      }
    });

    const sortedLeaderboard = Object.values(leaderboard)
      .sort((a, b) => b.wins - a.wins);

    res.json(sortedLeaderboard);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;