import { checkSchema } from "express-validator";

export const validation1 = checkSchema({
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