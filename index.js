require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.config");
const quizRoutes = require("./routes/quizRoutes");
const answerRoutes = require("./routes/answerRoutes");

const app = express();

app.use(cors());

connectDB();

app.use(express.json());

app.use("/quizzes", quizRoutes);
app.use("/answers", answerRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor está ouvindo na porta ${process.env.PORT}`);
});
