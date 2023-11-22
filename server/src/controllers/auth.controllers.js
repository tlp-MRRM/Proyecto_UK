import { User } from "../models/User.js";
import { Institute } from "../models/Institute.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



//----------------------------------------------------------------


const USER = 'user'
export const authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      return res.status(404).json({
        message: "El usuario ya existe en nuestro sistema.",
      });
    }

    const passhash = await bcrypt.hash(password, 1);

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: passhash,
      role: USER
    });
    const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });;

    return res.status(201).json({
      message: "Usuario registrado correctamente",
      token
    });
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error." + error,
    });
  }
};

export const authLogin = async (req, res) => {
  const { email, password } = req.body;

  try {

    const existingUser = await User.findOne({ where: { email: email } });
    if (!existingUser) return res.status(400).json({ message: "Usuario no encontrado" });

    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) return res.status(400).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign({ id: existingUser.id, role: existingUser.role }, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });
    let redirectUrl;
    switch (existingUser.role) {
      case 'admin':
        redirectUrl = 'http://localhost:3000/admin-user';
        break;
      case 'institute':
        let institute = await Institute.findOne({ where: { userId: existingUser.id, id_institute: null } });
        redirectUrl = `http://localhost:3000/instituto/:${institute.name}`;
        break;
      case 'user':
        redirectUrl = 'http://localhost:3000/';
        break;
      default:
        redirectUrl = 'http://localhost:3000/';
    }

    return res.json({
      message: 'Inicio de sesión correcto, se redireccionará en unos momentos',
      role: existingUser.role,
      token,
      redirectUrl,
      id: existingUser.id
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al iniciar sesión",
    });
  }
};

