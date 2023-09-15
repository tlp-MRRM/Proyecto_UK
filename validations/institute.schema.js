import { body } from "express-validator";

export const instituteSchemaValidation = [
  body("name")
    .exists()
    .notEmpty()
    .withMessage("El nombre de la institucion no puede estar vacio.")
    .isString(),
  body("abbreviation")
    .exists()
    .notEmpty()
    .withMessage("La abreviatura no debe estar vacia.")
    .isString(),
  body("id_category")
    .exists()
    .notEmpty()
    .withMessage("La id categoria no debe estar vacio.")
    .isNumeric(),
  body("id_institute")
    .exists()
    .notEmpty()
    .withMessage("La id instituto no debe estar vacio.")
    .isNumeric(),
  body("id_ubication")
    .exists()
    .notEmpty()
    .withMessage("La id ubicacion no debe estar vacio.")
    .isNumeric(),
  body("id_contact")
    .exists()
    .notEmpty()
    .withMessage("La id contacto no debe estar vacio.")
    .isNumeric(),
  body("description")
    .exists()
    .notEmpty()
    .withMessage("La descripcion no debe estar vacío.")
    .isString(),
];
