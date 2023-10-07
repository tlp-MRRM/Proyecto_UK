import { User } from "../models/User.js";
import bcrypt from 'bcryptjs';




export const authLogin = async (req, res) => {

  const { email, password } = req.body; // Actualiza los nombres de campos según tu formulario
  // Verificar si el usuario existe basado en el correo electrónico
  console.log({ email, password })
  try {
    // Verificar si el usuario existe basado en el correo electrónico
    const existingUser = await User.findOne({ where: { email: email } });

    if (!existingUser) {
      return res.status(404).json({
        message: 'Usuario o contraseña incorrectos.',
      });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, existingUser.password);

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


