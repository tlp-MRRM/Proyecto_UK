import { body } from "express-validator";

export const registerSchema= [
    body('firstName')
        .exists().withMessage('El nombre es requerido')
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .isString().withMessage('El nombre debe ser alfanumerico'),
    body('lastName')
        .exists().withMessage('El apellido es requerido')
        .notEmpty().withMessage('El apellido no puede estar vacío')
        .isString().withMessage('El apellido debe ser alfanumerico'),
    body('email')
        .exists().withMessage('El email es requerido')
        .notEmpty().withMessage('El email no puede estar vacío')
        .isEmail().withMessage('El email debe ser valido'),
    body('password')
        .exists().withMessage('La contraseña es requerida')
        .notEmpty().withMessage('La contraseña no puede estar vacía')
        .isString().withMessage('La contraseña debe ser alfanumerica')
]
