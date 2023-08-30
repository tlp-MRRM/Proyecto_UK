import { validationResult } from "express-validator";

export const validator = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 400,
            errors: errors
        })
    }
    next();
}

export default validator;