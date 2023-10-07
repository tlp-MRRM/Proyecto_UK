import { body } from "express-validator";

export const registerUserSchema = [
    body('email')
        .exists().withMessage('El email es requerido')
        .isEmpty().withMessage('El email no puede estar vacío')
        .isEmail().withMessage('El email debe ser valido')
]




checkSchema({

    email: {
        notEmpty: {
            errorMessage: "El email es obligatorio"
        },
        isEmail: {
            errorMessage: "El email es inválido"
        }
    },
    password: {
        notEmpty: {
            errorMessage: "La contraseña es obligatoria"
        },
        isPassword: {
            errorMessage: "La contraseña es obligatoria"
        },
        isLength: {
            errorMessage: "La contraseña es demasiado corta",
            opcions: { min: 6 }
        }
    }

})