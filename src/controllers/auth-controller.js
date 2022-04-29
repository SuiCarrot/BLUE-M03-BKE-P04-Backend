const authService = require("../services/auth-service");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
    const { email, password } = req.body;

    if (!(await authService.loginService(email))) {
        return res.status(400).send({ message: "Usuário não encontrado!" });
      };
    
      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({ message: "Senha inválida!" });
      }

      res.send(await authService.loginService(email));
  };

module.exports = {
    loginController
}

  
