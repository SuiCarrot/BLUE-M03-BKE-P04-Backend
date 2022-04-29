const mongoose = require('mongoose');

const PersonagensSchema = new mongoose.Schema({
    user: {type: String, required: true}, 
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
})

module.exports = mongoose.model('personagens-db', PersonagensSchema);
