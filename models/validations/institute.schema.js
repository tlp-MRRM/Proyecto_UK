import { check, checkSchema } from "express-validator";

export const validation2 = checkSchema({
    name: {
        notEmpty: {
            errorMessage: "El nombre del instituto es obligatorio"
        },
        isLength: {
            errorMessage: "El nombre es demasiado corto",
            opcions: { min: 8 }
        }
    },
    abbreviation: {
        notEmpty: {
            errorMessage: "La abreviatura es obligatoria"
        },
        isLength: {
            errorMessage: "La abreviatura es demasiado corta",
            opcions: { min: 5 }
        }
    },
    description: {
        notEmpty: {
            errorMessage: "La descripcion del instituto es obligatorio"
        },
        isLength: {
            errorMessage: "La descripcion es demasiado corta",
            opcions: { min: 20 }
        }
    },
    status: {
        notEmpty: {
            errorMessage: "El status es obligatorio"
        },
        isLength: {
            errorMessage: "El status es demasiado corto",
            opcions: { min: 10 }
        }
    },
    id_category: {
        notEmpty: {
            errorMessage: "La id de categoria es obligatoria"
        },
        isLength: {
            errorMessage: "La id de categoria es demasiado corta",
            opcions: { min: 1 }
        }
    },
    id_institute: {
        notEmpty: {
            errorMessage: "La id de instituto es obligatoria"
        },
        isLength: {
            errorMessage: "La id de instituto es demasiado corta",
            opcions: { min: 1 }
        }
    },
    id_ubication: {
        notEmpty: {
            errorMessage: "La id de ubicacion es obligatoria"
        },
        isLength: {
            errorMessage: "La id de ubicacion es demasiado corta",
            opcions: { min: 1 }
        }
    },
    id_contact: {
        notEmpty: {
            errorMessage: "La id de contacto es obligatoria"
        },
        isLength: {
            errorMessage: "La id de contacto es demasiado corta",
            opcions: { min: 1 }
        }
    },
    year_fundation: {
        notEmpty: {
            errorMessage: "El año de fundacion es obligatoria"
        }
    }
})