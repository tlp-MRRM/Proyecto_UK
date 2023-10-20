import { User } from "../../models/User.js";

export const validateAdmin = async (req, res, next) => {
    const user = req.user;
    const result = await User.findByPk(user.id)
    const isAdmin = await result.role
    if (isAdmin != ADMIN) {
        res.status(403).send({ message: "Acceso denegado" })
    }
    next()
}