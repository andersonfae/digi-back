const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Erro de conexão ao MongoDB:", error);
  }
}

module.exports = connect;
