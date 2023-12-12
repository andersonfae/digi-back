const express = require("express");
const router = express.Router();
const Answer = require("../models/Answer");

router.post("/createAnswer", async (req, res) => {
  try {
    const { name, answers } = req.body;

    if (!name || !answers || answers.length === 0) {
      return res.status(400).json({ error: "Dados inválidos." });
    }

    const newAnswer = new Answer(req.body);

    const savedAnswer = await newAnswer.save();

    res.json(savedAnswer);
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao salvar as respostas." });
  }
});

module.exports = router;
