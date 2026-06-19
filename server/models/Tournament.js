const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ["single", "double"],
    default: "single",
  },

  teams: {
    type: [String],
    default: [],
  },

  status: {
    type: String,
    default: "Upcoming",
  },
});

module.exports = mongoose.model(
  "Tournament",
  tournamentSchema
);