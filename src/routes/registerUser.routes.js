import {Router} from 'express';
const router = Router()
import ctrl  from '../controllers/registerUser.controllers.js'

router.get('/registro-usuario', (req, res) => {
    res.render('register/registerUser')
});

router.post('/registro-usuario', ctrl.registerUser);

export default router