const Personagem = require('../models/Personagens');

const findPersonagensService = async () => {
    return await Personagem.find();
};

const findPersonagemByIdService = async (id) => {
    return await Personagem.findById(id);
};

const createPersonagemService = async (newPersonagem) => {
    return await Personagem.create(newPersonagem)
};

const updatePersonagemService = async (id, personagemEdited) => {
    return await Personagem.findByIdAndUpdate(id, personagemEdited);
};

const deletePersonagemService = async (id) => {
    return await Personagem.findByIdAndDelete(id);
};

const findPersonagemByNameService = async (name) => {
    return await Personagem.findOne({name: name});
}

module.exports ={
    findPersonagensService,
    findPersonagemByIdService,
    createPersonagemService,
    updatePersonagemService,
    deletePersonagemService,
    findPersonagemByIdService,
    findPersonagemByNameService,
}
