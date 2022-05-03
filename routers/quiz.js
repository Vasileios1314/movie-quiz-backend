const { Router } = require("express");
const Category = require("../models/").category;
const Answer = require("../models/").answer;
const Question = require("../models/").question;
const Scoreboard = require("../models").scoreboard;
const router = new Router();

//get category by id
router.get("/category/:id", async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const response = await Category.findByPk(categoryId, {
      include: { model: Question, include: Answer },
    });
    if (response) {
      res.json(response);
    } else {
      res.status(404).send("category not found");
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get all the question with answers
router.get("/questions", async (req, res, next) => {
  try {
    const response = await Question.findAll({ include: Answer });
    if (response) {
      res.json(response);
    } else {
      res.status(404).send("Questions not found");
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get scoreboard
router.get("/scoreboard", async (req, res, next) => {
  try {
    const response = await Scoreboard.findAll();
    res.status(201).send(response);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
