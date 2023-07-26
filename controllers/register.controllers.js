const ctrl = {}
const institute = require('../models/institute')
const modality = require('../models/modality')
const province = require('../models/province')
const locality = require('../models/locality')
const typeCareer = require('../models/typeCareer')
const register = require('../models/user')
const timeUnit = require('../models/timeUnit')
const ubication = require('../models/ubication')
const category = require('../models/category')
const contact = require('../models/contact')
const career = require('../models/careers');
const {sequelize} = require('../db');

ctrl.renderRegisterInstitute = async (req, res) => {
    res.render("formInstitute/register-institute")
}


ctrl.renderRegisterCareers = (req, res) => {
    res.render("formInstitute/register-career")
}

ctrl.renderInstituteProfile = (req, res) => {
    res.render('user.institute/index')
}



ctrl.findAllProvinces = async (req, res) => {
    try {
        const provinces = await province.findAll();
        return res.json(provinces);
    } catch (error) {
        console.error('Error al obtener las provincias:', error);
        res.status(500).json({ error: 'Error al obtener las provincias' });
    }
}



ctrl.findAllLocalitiesById = async (req, res) => {
    try {
        const localities = await locality.findAll({
            where: {
                idProvince: req.params.id
            }
        });
        return res.json(localities);
    } catch (error) {
        console.error('Error al obtener las localidades:', error);
        res.status(500).json({ error: 'Error al obtener las localidades' });
    }
}


//CRUD Methods

ctrl.newUbication = async (req, res) => {
    const {
        idLocality,
        street,
        altitude,
        postalCode,
        mapLink
    } = req.body;
    try {
        const newUbication = new ubication({
            idLocality,
            street,
            altitude,
            postalCode,
            mapLink
        });

        await ubication.save()
        console.log('Ubicacion creada con exito')

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error al crear la ubicacion'
        });
    }
}


ctrl.newContact = async (req, res) => {
    const {
        mail,
        tel,
        weblink
    } = req.body;
    try {
        const newContact = new contact({
            mail,
            tel,
            weblink
        });
        
        await contact.save();
        console.log('Contacto creado con exito')
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error al crear el contacto'
        });
    }
    
}


ctrl.newInstitute = async (req, res) => {
    const {
        name,
        abbreviation,
        mail,
        tel,
        weblink,
        yearFundation,
        description,
        idLocality,
        street,
        altitude,
        postalCode,
        mapLink
    } = req.body;
    try {
        // const t = await sequelize.transaction();
        const newInstitute = institute.create({
            name,
            abbreviation,
            yearFundation,
            description,
            contact : {mail, tel, weblink},
            ubication: {idLocality, street, altitude, postalCode, mapLink},
            }, {
              include: [ contact, ubication ]
            })
            // await t.commit();
       console.log('Instituto creado con exito')

    } catch (error) {
        console.log(error)
        // await t.rollback();
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


module.exports = ctrl

