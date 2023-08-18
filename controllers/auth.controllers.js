import { user } from "../models/user.js";

const ctrl_auth = {}


ctrl_auth.auth_login = async (req, res) => {
  console.log(req.body)
    const { email, password } = req.body; // Actualiza los nombres de campos según tu formulario
      // Verificar si el usuario existe basado en el correo electrónico
  console.log({email, password})
    try {
      // Verificar si el usuario existe basado en el correo electrónico
      const usuarioExistente = await user.findOne({ where: { correoElectronico: email } });
  
      if (!usuarioExistente) {
        return res.status(400).json({
          message: 'El usuario no está registrado',
        });
      }
  
      // Verificar la contraseña
      const contraseñaValida = await bcrypt.compare(password, usuarioExistente.password);
  
      if (!contraseñaValida) {
        return res.status(400).json({
          message: 'La contraseña no es válida',
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



export {ctrl_auth}