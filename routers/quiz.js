const { Router } = require("express");
const Scoreboard = require("../models").scoreboard;
const router = new Router();

// add new player score

router.post("/gameover", async (req, res, next) => {
  const { username, score } = req.body;
  const newScore = await Scoreboard.create({
    username,
    score,
  });
  return res.status(201).send({ message: "Game over!", newScore });
});

//get scoreboard
router.get("/scoreboard", async (req, res, next) => {
  try {
    const response = await Scoreboard.findAll({ order: [["score", "DESC"]] });
    res.status(201).send(response);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
