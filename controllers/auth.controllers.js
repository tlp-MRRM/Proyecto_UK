authCtrl = {}


authCtrl.login = async (req, res) => {
    const { username, password } = req.body; // Actualiza los nombres de campos según tu formulario
  
    try {
      // Verificar si el usuario existe basado en el correo electrónico
      const usuarioExistente = await Usuario.findOne({ where: { correoElectronico: username } });
  
      if (!usuarioExistente) {
        return res.status(400).json({
          message: 'El usuario no está registrado',
        });
      }
  
      // Verificar la contraseña
      const contraseñaValida = await bcrypt.compare(password, usuarioExistente.contraseña);
  
      if (!contraseñaValida) {
        return res.status(400).json({
          message: 'La contraseña no es válida',
        });
      }
  
      // Inicio de sesión exitoso
      res.json({
        message: 'Inicio de sesión correcto',
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error al iniciar sesión',
      });
    }
  };


module.exports = authCtrl;