//ADMIN RENDERS =================================================

import { User } from "../models/User.js";

export const renderGetAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                role: 'institute'
            }
        })
        return res.render('admin/admin', {
            users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los usuarios'
        });
    }
}

//END ADMIN RENDERS =============================================
export const renderRegister = (req, res) => {
    res.render('register/register')
}
export const renderRegisterAdmin = (_req, res) => {
    res.render('register/registerAdmin')
}
export const renderSearch = (_req, res) => {
    res.render('search/index')
};

export const renderRegisterInstitute = (req, res) => {
    const id_user = req.user
    res.render("formInstitute/register-institute.ejs", { id_user: id_user })
}

export const renderRegisterCareers = (req, res) => {
    res.render("formInstitute/register-career")
}


export const renderInstituteProfile = (_req, res) => {
    res.render('userInstitute/index.ejs')
}

export const renderLogin = (_req, res) => {
    res.render('login/login.ejs')
}

export const renderHome = (_req, res) => {
    res.render('home/index.ejs')
};

export const renderFaq = (_req, res) => {
    res.render('home/faq.ejs')
};
export const renderWorkWithUs = (_req, res) => {
    res.render('workWithUs/index.ejs')
}

export const renderAboutUs = (_req, res) => {
    res.render('home/about.ejs')
}