import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import createAccessToken from "../libs/jwt.js";



//----------------------------------------------------------------
export const authLogin = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  console.log(email, password)
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


    const token = await createAccessToken({ id: existingUser.id });
    res.cookie("token", token);

    res.json({ token });

    // res.json({
    //   message: `Inicio de sesión correcto, bienvenido ${email}`,
    // });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al iniciar sesión",
    });
  }
};
