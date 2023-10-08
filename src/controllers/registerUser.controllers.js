import { User } from '../models/User.js';
import bcrypt from 'bcryptjs';


export const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email: email } });

        if (existingUser) {
            return res.status(404).json({
                message: 'El usuario ya existe en nuestro sistema.',
            });
        }

        const passhash = await bcrypt.hash(password, 1)


        const newUser = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: passhash
        })

        return res.status(201).json({
            status: 201,
            message: "Usuario creado correctamente",
            newUser: newUser
        })


    } catch (error) {
        return res.status(500).json({
            message: "Hubo un error." + error
        })
    }
}

