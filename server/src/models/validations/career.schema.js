import { body } from 'express-validator';

export const createCareerSchema = [
    body('id_type_career')
        .isEmpty().withMessage('Seleccione el tipo de carrera'),
    body('name')
        .exists().withMessage('El nombre de la carrera es necesario')
        .isEmpty().withMessage('El nombre de la carrera no puede estar vacío')
        .isString().withMessage('El nombre de la carrera debe ser texto'),
    body('description')
        .exists().withMessage('La descripción de la carrera es necesaria')
        .isEmpty().withMessage('La descripción de la carrera no puede estar vacía')
        .isString().withMessage('La descripción de la carrera debe ser texto'),
    body('start_date')
        .exists().withMessage('La fecha de inicio de la carrera es necesaria')
        .isEmpty().withMessage('La fecha de inicio de la carrera no puede estar vacía')
        .isDate().withMessage('La fecha de inicio de la carrera debe ser válida')
]   
