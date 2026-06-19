const express = require("express");

const Team = require("../models/Team");

const generateBracket =
require("../utils/bracketGenerator");

const router = express.Router();

router.get("/bracket", async (req, res) => {
  try {
    const teams = await Team.find();

    const teamNames =
      teams.map((team) => team.teamName);

    const bracket =
      generateBracket(teamNames);

    res.json(bracket);

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;