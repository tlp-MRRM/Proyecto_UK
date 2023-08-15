const ctrl = {}
const province = require('../models/province')
const locality = require('../models/locality')
const time_unit = require('../models/time_unit')
const modality = require('../models/modality')
const ubication = require('../models/ubication')
const category = require('../models/category')
const contact = require('../models/contact')
const institute = require('../models/institute')
const type_career = require('../models/type_career')
const register = require('../models/user')
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

ctrl.findAllLocalities = async (req, res) => {
    try {
        const localities = await locality.findAll();
        return res.json(localities);
    } catch (error) {
        console.log('Error al obtener las localidades:', error);
        res.status(500).json({ error: 'Error al obtener las localidades' });
    }
}


ctrl.findAllLocalitiesById = async (req, res) => {
    try {
        const localities = await locality.findAll({
            where: {
                id_province: req.params.id
            }
        });
        return res.json(localities);
    } catch (error) {
        console.log('Error al obtener las localidades:', error);
        res.status(500).json({ error: 'Error al obtener las localidades' });
    }
}


//CRUD Methods

ctrl.newUbication = async (req, res) => {
    const id_ubication = {
        id_locality,
        street,
        altitude,
        postal_code,
        map_link
    } = req.body;
    try {
        id_ubication = new ubication({
            id_locality,
            street,
            altitude,
            postal_code,
            map_link
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
        web_link
    } = req.body;
    try {
        const newContact = new contact({
            mail,
            tel,
            web_link
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
    const  {
        id_locality,
        street,
        altitude,
        postal_code,
        map_link,
        mail,
        tel,
        web_link,
        name,
        abbreviation,
        year_fundation,
        description,
        id_category 
    } = req.body
    const t = await sequelize.transaction();
    try {
        const result = await sequelize.transaction(async (t)=> {
            const newUbication = await ubication.create({
                id_locality,
                street,
                altitude,
                postal_code,
                map_link
            }, {transaction: t});
            console.log(newUbication.dataValues.id)

            const newContact = await contact.create({
                mail,
                tel,
                web_link
            }, {transaction: t})
            console.log(newContact.dataValues.id)

            const newInstitute = institute.create({
                name,
                abbreviation,
                year_fundation,
                description,
                id_category,
                id_ubication: newUbication.id,
                id_contact: newContact.id
            }, {transaction:t})
            console.log((await newInstitute).dataValues)

            // await t.commit()
            
        })
        
            // }, {
            //   include: [ contact, ubication ]
            // })
            // await t.commit();
       console.log('Instituto creado con exito')

    } catch (error) {
        console.log('ERROR', error)
        throw new Error
        return res.status(500).json({
            message: 'Error al crear el instituto'
        });
    }
}




ctrl.newCareer = async (req, res) => {
    const {
        name,
        id_type_career,
        startDate,
        duration,
        id_time_unit,
        id_modality,
        final_title,
        id_institute,
        id_career
    } = req.body;
    try {
        const career = await career.create({
            name,
            id_type_career,
            startDate,
            duration,
            id_time_unit,
            id_modality,
            final_title,
            id_institute,
            id_career
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

