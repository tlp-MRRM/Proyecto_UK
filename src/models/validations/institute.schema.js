import { body } from 'express-validator';

export const createInstituteSchema = [
  body('name')
    .exists().withMessage('El nombre es requerido')
    .notEmpty().withMessage('El nombre de la institución no puede estar vacío.')
    .isString().withMessage('El nombre de la institución debe ser texto.'),
  body('abbreviation')
    .exists().withMessage('La abreviación de la institución es requerida')
    .notEmpty().withMessage('La abreviación de la institución no puede estar vacío.')
    .isString().withMessage('La abreviación de la institución debe ser texto'),
  body('id_category')
    .notEmpty().withMessage('Debe seleccionar la categoría'),
  body('mail')
    .exists().withMessage('El mail es requerido')
    .notEmpty().withMessage('El mail no puede estar vacío')
    .isEmail().withMessage('El email debe ser válido'),
  body('tel')
    .exists().withMessage('El número de teléfono es requerido')
    .notEmpty().withMessage('El número de teléfono no puede estar vacío'),
  body('web_link')
    .exists().withMessage('El link de la página es requerido')
    .notEmpty().withMessage('El link de la página no puede estar vacío')
    .isURL(),
  body('id_locality')
    .notEmpty().withMessage('Debe seleccionar la provincia/localidad'),
  body('street')
    .exists().withMessage('La calle es requerida')
    .notEmpty().withMessage('La calle no puede estar vacía')
    .isString().withMessage('La calle debe ser texto'),
  body('altitude')
    .exists().withMessage('La altura de la ubicación es requerida')
    .notEmpty().withMessage('La altura de la ubicación no puede estar vacía')
    .isNumeric().withMessage('La altura de la ubicación debe ser numérica'),
  body('postal_code')
    .exists().withMessage('El código postal es requerido')
    .notEmpty().withMessage('El código postal no puede estar vacío')
    .isNumeric().withMessage('El código postal debe ser numérico'),
  body('map_link')
    .exists().withMessage('El link de la ubicación es requerido')
    .notEmpty().withMessage('El link de la ubicación no puede estar vacío')
    .isURL().withMessage('El link de la ubicación debe ser válido')
];
