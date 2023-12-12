const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
  title: String,
  questions: [
    {
      text: String,
      options: [
        {
          text: String,
          isCorrect: Boolean,
        },
      ],
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
