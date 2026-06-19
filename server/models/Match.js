const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  teamA: String,
  teamB: String,

  scoreA: Number,
  scoreB: Number,

  winner: String,

  screenshot: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Match", matchSchema);