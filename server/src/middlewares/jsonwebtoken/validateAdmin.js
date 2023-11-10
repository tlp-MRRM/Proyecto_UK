import { User } from "../../models/User.js";

export const validateAdmin = async (req, res, next) => {
    const user = req.user;
    const result = await User.findByPk(user.id)
    const role = await result.role
    if (role != 'admin') {
        res.status(403).send({ message: "Acceso denegado" })
    }
    next()
}