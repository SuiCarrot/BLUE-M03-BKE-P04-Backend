const userService = require('../services/users-service');
const authService = require('../services/auth-service')

const findAllUsersController = async (req,res) => {
  const users = await userService.findAllUsersService();

  if (users.length === 0) {
    return res.status(400).send({
      message: "Não existem usuários cadastrados!",
    });
  }

  res.send(users);
};

const createUserController = async (req,res) => {
    if(!req.body || !req.body.nameUser || !req.body.username || !req.body.email || !req.body.password || !req.body.photo){
        return res.status(400).send({message: "Alguns campos estão faltando. Os campos são: 'username', 'name', email, 'password' ou 'photo'"})
    }

    const foundUser = await userService.findByEmailUserService(req.body.email);

  if (foundUser) {
    return res.status(400).send({
      message: "Usuário já existe!",
    });
  }

  const user = await userService.createUserService(req.body);

  if (!user) {
      return res.status(400).send({
      message: "Erro ao criar Usuário!",
      });
  }

  const token = await authService.generateToken(user.id);

  res.status(201).send({
  user: {
    id: user.id,
    nameUser: user.nameUser,
    username: user.username,
    email: user.email,
    password: user.password,
    photo: user.photo,
    token: user.token,
  },
  });
};

module.exports = {
    findAllUsersController,
    createUserController
}
