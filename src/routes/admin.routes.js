import { getInstitutes } from "../controllers/admin.controllers.js";
import { getInstituteById } from "../controllers/institute.controllers.js";
import { registerUser } from "../controllers/registerUser.controllers.js";
import { Router } from 'express';

const adminRoutes = Router()

adminRoutes.get('/api/get-all-institutes', getInstitutes)
adminRoutes.get('/api/get-institute/:id', getInstituteById)
// adminRoutes.get('/api/get-non-admin-users', getNonAdminUsers)

// adminRoutes.put('/api/update-institute/:id', updateInstitute)
// adminRoutes.put('/api/update-user/:id', updateInstitute)

// adminRoutes.delete('/api/remove-institute/:id', removeInstitute)
// adminRoutes.delete('/api/remove-user/:id', removeUser)

// Registrar nuevo usuario para institucion
adminRoutes.post('/api/create-user', registerUser);
export default adminRoutes