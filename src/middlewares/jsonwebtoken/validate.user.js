import { User } from "../../models/User.js";

export const validateInstitute = async (req, res, next) => {
    const user = req.user;
    const result = await User.findByPk(user.id)
    const isUser = await result.role
    if (isUser != USER) {
        res.status(403).send({ message: "No tiene permisos para acceder a esta pagina" })
    }
    next()
}