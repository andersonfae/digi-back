const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o quiz." });
  }
});

router.post("/createQuiz", async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    const savedQuiz = await newQuiz.save();
    res.json(savedQuiz);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o quiz." });
  }
});

module.exports = router;
