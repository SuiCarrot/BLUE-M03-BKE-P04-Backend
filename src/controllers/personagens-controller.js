const mongoose = require('mongoose');
const personagensService = require('../services/personagens-service.js');

const findPersonagensController = async (req, res) => {
    res.send( await personagensService.findPersonagensService());
};

const findPersonagemByIdController = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: 'ID inválido' });
    };

    if (!( await personagensService.findPersonagemByIdService(req.params.id))) {
        return res.status(404).sen({ message: 'Personagem não localizado!' });
    };

    res.send( await personagensService.findPersonagemByIdService(req.params.id));
};

const findPersonagemByNameController = async (req,res)=> {
    if(!mongoose.Types.ObjectId.isValid(req.params.name)) {
        return res.status(400).send({message: 'Nome inválido!'})
    };

    if(!(await personagensService.findPersonagemByNameService(req.params.name))) {
        return res.status(404).send({message: 'Personagem não localizado!'})
    };

    res.send (await personagensService.findPersonagemByNameService(req.params.name));
}

const createPersonagemController = async (req, res) => {
    if (!req.body || 
        !req.body.user || 
        !req.body.name ||
        !req.body.imageUrl) {
            return res.status(400).send({ message: 'Os campos não foram preenchidos corretamente!' });
        }

        res.send( await personagensService.createPersonagemService(req.body));
};

const updatePersonagemController = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: 'ID inválido!' });        
    };

    if (!( await personagensService.updatePersonagemService(req.params.id))) {
        return res.status(404).send({ message: 'Personagem não localizado!' });
    };

    if (
        !req.body || 
        !req.body.user || 
        !req.body.name ||
        !req.body.imageUrl
    ) {
        return res.status(400).send({ message: 'Os campos não foram preenchidos corretamente!' });
    };

    res.send( await personagensService.updatePersonagemService(req.params.id, req.body));
};

const deletePersonagemController = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).send({ message: 'ID inválido!' });
        return;
    }; 

    if (!( await personagensService.deletePersonagemService(req.params.id))) {
        return res.status(404).send({ message: 'Personagem não localizado!' });
    };

    await personagensService.deletePersonagemService(req.params.id);
    res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
    findPersonagensController,
    findPersonagemByIdController,
    createPersonagemController,
    updatePersonagemController,
    deletePersonagemController,
    findPersonagemByNameController
};
