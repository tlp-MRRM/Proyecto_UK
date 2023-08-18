import { user } from "../models/user.js";
import bcrypt from 'bcryptjs'; 

const ctrl = {}

ctrl.registerUser = async (req, res) => {
    console.log(req.body)
    const {name, surname, email, password} = req.body;

    try {
        const usuarioExistente = await user.findOne({ where: { correoElectronico: email } });

        if (usuarioExistente) {
          return res.status(404).json({
            message: 'El usuario ya existe en nuestro sistema.',
          });
        }

        const passhash = await bcrypt.hash(password, 1)


        const newUser = await user.create({
            nombre : name,
            apellido : surname,
            correoElectronico : email,
            contrasenia : passhash
        })
        
        return res.status(201).json({
            status: 201,
            message: "Usuario creado correctamente"
        }) 

        
    } catch (error) {
        return res.status(500).json({
            message: "Hubo un error." + error
        })
    }
}

export default ctrl;