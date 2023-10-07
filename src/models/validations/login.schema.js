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
        .isLength({ min: 8 }).withMessage('La contraseña debe tener minimo 8 caracteres')
        .bail().matches(/[a-z]/).withMessage('La contraseña debe tener minimo 1 minuscula')
        .bail().matches(/[A-Z]/).withMessage('La contraseña debe tener minimo 1 mayuscula')
        .bail().matches(/[0-9]/).withMessage('La contraseña debe tener minimo 1 numero')
        .bail().matches(/[^A-Za-z0-9]/).withMessage('La contraseña debe tener al menos un signo'),
]


