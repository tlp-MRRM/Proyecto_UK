import { User } from "../../models/User.js";

export const validateInstitute = async (req, res, next) => {
    const user = req.user;
    const result = await User.findByPk(user.id)
    const isInstitute = await result.role
    if (isInstitute != INSTITUTE) {
        res.status(403).send({ message: "No tiene permisos para acceder a esta pagina" })
    }
    next()
}