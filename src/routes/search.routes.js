import {Router} from 'express';
const router = Router()
import ctrl from '../controllers/search.controllers.js'
const {
    renderSearch
} = ctrl

router.get('/busqueda', renderSearch);

export default router