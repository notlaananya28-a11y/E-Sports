const express = require("express");
const Team = require("../models/Team");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    message: "Teams Route Working"
  });
});

router.post("/create", async (req, res) => {
  try {
    const { teamName, captain, players } = req.body;

    const team = new Team({
      teamName,
      captain,
      players,
    });

    await team.save();

    res.json({
      message: "Team Created",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;