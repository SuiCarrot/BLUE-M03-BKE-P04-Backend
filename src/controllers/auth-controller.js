const authService = require("../services/auth-service");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const loginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await authService.loginService(email)

    if (!user) {
        return res.status(400).send({ message: "Usuário não encontrado!" });
      };
    
      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({ message: "Senha inválida!" });
      }

      const token = authService.generateToken(user.id);

      res.send({token})
  };

module.exports = {
    loginController
}

  
