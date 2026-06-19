const express = require("express");
const multer = require("multer");

const Match = require("../models/Match");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + file.originalname
    );
  },
});

const upload = multer({ storage });

router.post(
"/report",
upload.single("screenshot"),
async (req,res)=>{
    try {
      const {
        teamA,
        teamB,
        scoreA,
        scoreB,
      } = req.body;

      const winner =
        Number(scoreA) > Number(scoreB)
          ? teamA
          : teamB;

      const match = new Match({
        teamA,
        teamB,
        scoreA,
        scoreB,
        winner,
        screenshot: req.file
          ? req.file.filename
          : "",
      });

      await match.save();

      res.json({
        message: "Match Saved",
        winner,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);

router.get("/", async (req, res) => {
  const matches = await Match.find();

  res.json(matches);
});

module.exports = router;