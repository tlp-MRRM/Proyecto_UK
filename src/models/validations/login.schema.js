import { body } from "express-validator";

export const registerUserSchema = [
    body('email')
        .exists().withMessage('El email es requerido')
        .isEmpty().withMessage('El email no puede estar vacío')
        .isEmail().withMessage('El email debe ser valido'),
    body('password')
        .exists().withMessage('La contraseña es requerida')
        .notEmpty().withMessage('La contraseña no puede estar vacía')
        .isString().withMessage('La contraseña debe ser alfanumerica')
]


