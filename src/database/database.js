const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Conectando ao banco de dados...");

  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo Atlas conectado com sucesso!"))
    .catch((err) => console.log(`Erro ao conectar com o banco: ${err}`));

};

module.exports = connectDatabase;
