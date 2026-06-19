const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/auth", require("./routes/auth"));
app.use("/matches", require("./routes/matches"));
app.use("/leaderboard", require("./routes/leaderboard"));
app.use("/teams", require("./routes/teams"));
app.use("/tournament", require("./routes/tournament"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});

app.use(
  "/tournament",
  require("./routes/tournament")
);