const ctrlRenderForms = {}
const ctrl = {}
const modality = require('../models/modality')
const province = require('../models/province')
const locality = require('../models/locality')
const typeCareer = require('../models/typeCareer')
const register = require('../models/user')
const timeUnit = require('../models/timeUnit')
const ubication = require('../models/ubication')
const category = require('../models/category')
const contact = require('../models/contact')
const institute = require('../models/institute')
const career = require('../models/careers');

ctrlRenderForms.renderRegisterInstitute = (req, res) => {
    res.render("formInstitute/register-institute")
}

ctrlRenderForms.renderRegisterCareers = (req, res) => {
    res.render("formInstitute/register-career")
}

ctrlRenderForms.renderInstituteProfile = (req, res) => {
    res.render('user.institute/index')
}


//CRUD
ctrl.newInstitute = async (req, res) => {
    const {
        name,
        idCategory,
        idInstitute,
        idUbication,
        idContact,
        yearFundation
    } = req.body;
    try {
        const institute = await institute.create({
            name,
            idCategory,
            idInstitute,
            idUbication,
            idContact,
            yearFundation
        });
        return res.json(institute);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error al crear el instituto'
        });
    }
}

ctrl.newCareer = async (req, res) => {
    const {
        name,
        idTypeCarer,
        startDate,
        duration,
        idTimeUnit,
        idModality,
        final_title,
        idInstitute,
        idCareer
    } = req.body;
    try {
        const career = await career.create({
            name,
            idTypeCarer,
            startDate,
            duration,
            idTimeUnit,
            idModality,
            final_title,
            idInstitute,
            idCareer
        });
        return res.json(career);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error al crear la carrera'
        });
    }
}


module.exports = ctrlRenderForms

