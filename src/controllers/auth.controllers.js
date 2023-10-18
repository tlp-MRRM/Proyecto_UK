import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



//----------------------------------------------------------------
export const authLogin = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email: email } });


    if (!existingUser) {
      return res.status(404).json({
        message: "Usuario o contraseña incorrectos.",
      });
    }

    const validPassword = await bcrypt.compare(password, existingUser.password);

    if (!validPassword) {
      return res.status(404).json({
        message: "Usuario o contraseña incorrectos.",
      });
    }
    console.log('AUTH CONTROLLER IS ADMIN ===============')
    console.log(existingUser.isAdmin)
    const token = jwt.sign({ id: existingUser.id }, process.env.TOKEN_SECRET_KEY);
    return res.json({
      message: 'Inicio de sesión correcto, se redireccionará en unos momentos',
      isAdmin: existingUser.isAdmin,
      token,
      id: existingUser.id
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al iniciar sesión",
    });
  }
};
