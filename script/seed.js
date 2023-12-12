const mongoose = require("mongoose");
const Quiz = require("../models/Quiz");

const dbURI = "mongodb://127.0.0.1:27017/digi-banco";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const quizData = {
  title: "Quiz sobre Engajamento",
  questions: [
    {
      text: "Quando o assunto é reconhecimento da equipe, você é:",
      options: [
        {
          text: "Um verdadeiro Sherlock Holmes, sempre de olho no talento oculto.",
          isCorrect: true,
        },
        {
          text: "Mais perdido que cebola em salada de frutas, quem precisa de reconhecimento?",
          isCorrect: false,
        },
        {
          text: 'O Oprah Winfrey das recompensas, você para tudo e grita: "Você ganha uma recompensa, você ganha uma recompensa, todo mundo ganha uma recompensa!"',
          isCorrect: false,
        },
      ],
    },
    {
      text: "Em planejamento e estratégia, você é:",
      options: [
        {
          text: 'O Gandalf do marketing: "Um planejamento nunca se atrasa, nem se adianta, chega exatamente quando pretende".',
          isCorrect: true,
        },
        {
          text: "Mais confuso que pinguim no deserto, o que é um plano mesmo?",
          isCorrect: false,
        },
        {
          text: "O Einstein das estratégias, sempre com uma ideia brilhante na manga.",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Falando em tecnologia e inovação, você se considera:",
      options: [
        {
          text: "Um verdadeiro Tony Stark, sempre com uma inovação tecnológica na cartola.",
          isCorrect: true,
        },
        {
          text: "Um dinossauro digital, ainda tentando descobrir como enviar um e-mail.",
          isCorrect: false,
        },
        {
          text: "O Steve Jobs do seu escritório, inovando até no café da manhã.",
          isCorrect: false,
        },
      ],
    },
    {
      text: "CRM para você é:",
      options: [
        {
          text: "Como GPS para viajante: indispensável para não perder nenhum cliente no caminho.",
          isCorrect: true,
        },
        {
          text: "Uma sopa de letrinhas, CRM, ABC, XYZ, tudo a mesma coisa.",
          isCorrect: false,
        },
        {
          text: "A bússola do seu negócio, apontando sempre para relacionamentos mais fortes.",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Análise de dados é:",
      options: [
        {
          text: "Como um detetive na cena do crime, desvendando cada mistério dos números.",
          isCorrect: true,
        },
        {
          text: "Um bicho de sete cabeças, você prefere contar nos dedos.",
          isCorrect: false,
        },
        {
          text: "O pão com manteiga do seu café da manhã, essencial para começar o dia.",
          isCorrect: false,
        },
      ],
    },
  ],
};

async function seedDatabase() {
  try {
    const createdQuiz = await Quiz.create(quizData);

    console.log("Quiz inicial adicionado com sucesso:", createdQuiz);
  } catch (error) {
    console.error("Erro ao adicionar o quiz inicial:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
