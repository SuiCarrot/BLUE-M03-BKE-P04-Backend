const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose
      .connect('mongodb+srv://Bruno123:blue123@api-rickandmorty.pbiml.mongodb.net/api-rickAndMorty?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Mongo Atlas conectado com sucesso');
      })
      .catch((err) => {
        return console.log(`Erro na conexao com o banco: ${err}`);
      });
  }
  
module.exports = connectToDatabase;
