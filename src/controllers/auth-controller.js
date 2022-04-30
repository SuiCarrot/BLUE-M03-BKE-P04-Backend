const authService = require("../services/auth-service");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const loginController = async (req, res) => {
    const { email, password } = req.body;

    if (!(await authService.loginService(email))) {
        return res.status(400).send({ message: "Usuário não encontrado!" });
      };
    
      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({ message: "Senha inválida!" });
      }

      res.send(await authService.loginService(email));

      res.send(authService.generateToken(user.id));
  };

module.exports = {
    loginController
}

  
