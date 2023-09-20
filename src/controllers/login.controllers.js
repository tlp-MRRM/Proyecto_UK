const ctrl= {}
import jwt from 'jsonwebtoken';
import bcrypts from 'bcryptjs';
import {promisify} from 'util';

ctrl.sesion = (req, res) => {
    res.render('userInstitute/index.ejs')
}

ctrl.login = (req, res) => {
    res.render('login/login.ejs')
} 

export default ctrl