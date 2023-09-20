import { user } from "../models/user.js";
import bcrypt from 'bcryptjs'; 

const ctrl_auth = {}


ctrl_auth.auth_login = async (req, res) => {

  const { email, password } = req.body; // Actualiza los nombres de campos según tu formulario
  // Verificar si el usuario existe basado en el correo electrónico
  console.log({ email, password })
  try {
    // Verificar si el usuario existe basado en el correo electrónico
    const usuarioExistente = await user.findOne({ where: { correoElectronico: email } });

    if (!usuarioExistente) {
      return res.status(404).json({
        message: 'Usuario o contraseña incorrectos.',
      });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, usuarioExistente.password);

    if (!validPassword) {
      return res.status(404).json({
        message: 'Usuario o contraseña incorrectos.',
      });
    }

    // Inicio de sesión exitoso
    res.json({
      message: `Inicio de sesión correcto, bienvenido ${email}`,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al iniciar sesión',
    });
  }
};



export { ctrl_auth }