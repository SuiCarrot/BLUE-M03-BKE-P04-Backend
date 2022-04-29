const express = require('express');
const router = express.Router();
const personagensController = require('../controllers/personagens-controller');

router.get('/characters', personagensController.findPersonagensController);

router.post('/characters/create', personagensController.createPersonagemController);

router.get('/characters/find/:id', personagensController.findPersonagemByIdController);

router.put('/characters/update/:id', personagensController.updatePersonagemController);

router.delete('/characters/delete/:id', personagensController.deletePersonagemController);


module.exports = router;
