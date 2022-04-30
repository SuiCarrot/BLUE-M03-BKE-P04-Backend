const userService = require('../services/users-service');

const findAllUsersController = async (req,res) => {
    res.send( await userService.findAllUsersService());
};

const createUserController = async (req,res) => {
    if(!req.body || !req.body.name || !req.body.username || !req.body.email || !req.body.password || !req.body.photo){
        return res.status(400).send({message: 'Os campos não foram preenchidos corretamente!'})
    }

    res.send( await userService.createUserService(req.body));

    const token = authService.generateToken(user.id);

    res.status(201).send({
      user: {
        id: user.id,
        name,
        username,
        email,
        photo
      },
      token,
    });
};

module.exports = {
    findAllUsersController,
    createUserController
}
