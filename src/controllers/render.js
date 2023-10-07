export const renderRegisterUser = (_req, res) => {
    res.render('register/registerUser')
}
export const renderSearch = (_req, res) => {
    res.render('search/index')
};

export const renderRegisterInstitute = async (req, res) => {
    res.render("formInstitute/register-institute.ejs")
}


export const renderRegisterCareers = (req, res) => {
    res.render("formInstitute/register-career")
}


export const renderInstituteProfile = (req, res) => {
    res.render('userInstitute/index.ejs')
}

export const renderLogin = (req, res) => {
    res.render('login/login.ejs')
}

export const renderHome = (req, res) => {
    res.render('home/index.ejs')
};

export const renderFaq = (req, res) => {
    res.render('home/faq.ejs')
};
export const renderWorkWithUs = (req, res) => {
    res.render('workWithUs/index.ejs')
}

export const renderAboutUs = (req, res) => {
    res.render('home/about.ejs')
}