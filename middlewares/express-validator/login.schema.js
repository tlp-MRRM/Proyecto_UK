import { checkSchema } from "express-validator";

export const login_schema = checkSchema({
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
        }

})