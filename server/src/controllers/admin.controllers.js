import { Institute } from "../models/Institute.js";
import { User } from "../models/User.js";

export const getInstitutes = async (req, res) => {
    try {
        const institutes = await Institute.findAll();
        res.status(200).json(institutes);
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const eliminarUsuario = async (req, res) => {
    const { id } = req.params;

    console.log(id)

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no existe' });
        }         
        
        user.destroy();
        res.json({ message: 'eliminado'})
    } catch (error) {
        res.status(500).json({ error });
    }
};

 // Asegúrate de importar tu modelo de usuario

 export const editarUsuario = async (req, res) => {
    const id = req.params.userId; // Asegúrate de que estás obteniendo el ID correctamente desde la URL
    console.log(id)
    const { firstName, lastName, email } = req.body;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualiza los datos del usuario
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;

        await user.save();

        res.status(200).json({ message: 'Usuario editado exitosamente' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

  