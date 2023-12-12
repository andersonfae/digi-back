const mongoose = require("mongoose");
const { Schema } = mongoose;

const answerSchema = new Schema({
  name: String,
  answers: [
    {
      _questionID: String,
      _optionID: String,
    },
  ],
});

module.exports = mongoose.model("Answer", answerSchema);
