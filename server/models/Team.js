const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },

  captain: {
    type: String,
    required: true,
  },

  players: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Team", teamSchema);