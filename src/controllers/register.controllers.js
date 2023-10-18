
import { Province } from '../models/Province.js';
import { Locality } from '../models/Locality.js';
import { Ubication } from '../models/Ubication.js';
import { Contact } from '../models/Contact.js';
import { Institute } from '../models/Institute.js';
import { sequelize } from '../connections/db.js'
import { Career } from '../models/Careers.js';
import { TypeCareer } from '../models/TypeCareer.js';





// SELECT LOCALITY
export const findAllProvinces = async (req, res) => {
    try {
        const provinces = await Province.findAll();
        return res.json(provinces);
    } catch (error) {
        console.error('Error al obtener las provincias:', error);
        res.status(500).json({ error: 'Error al obtener las provincias' });
    }
}

export const findAllLocalities = async (req, res) => {
    try {
        const localities = await Locality.findAll();
        return res.json(localities);
    } catch (error) {
        console.log('Error al obtener las localidades:', error);
        res.status(500).json({ error: 'Error al obtener las localidades' });
    }
}


export const findAllLocalitiesById = async (req, res) => {
    try {
        const localities = await Locality.findAll({
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

// END SELECT LOCALITY


// CREATE INSTITUTE
export const newInstitute = async (req, res) => {
    const {
        id_locality,
        id_category,
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
    } = req.body
    const id_user = req.user.id
    console.log('EL ID USER ES:', req.user)
    const t = await sequelize.transaction();
    try {
        const result = await sequelize.transaction(async (t) => {
            const newUbication = await Ubication.create({
                id_locality,
                street,
                altitude,
                postal_code,
                map_link
            }, { transaction: t });
            console.log(newUbication.dataValues.id)

            const newContact = await Contact.create({
                mail,
                tel,
                web_link
            }, { transaction: t })
            console.log(newContact.dataValues.id)

            return await Institute.create({
                name,
                abbreviation,
                year_fundation,
                description,
                id_user,
                id_category,
                id_ubication: newUbication.id,
                id_contact: newContact.id
            }, { transaction: t })

        })

        console.log('Instituto creado con exito')
        console.log(result)
        return res.status(201).json({
            id_institute: result.dataValues?.id,
            message: 'Tu institucion se ha registrado con exito!'
        });

    } catch (error) {
        console.log('ERROR', error)
        return res.status(500).json({
            message: 'Error al crear el instituto:' + error
        });
    }
}



//CREATE CAREER
export const newCareer = async (req, res) => {
    const { id_institute } = req.parans.id
    const isValidInsitute = Institute.findOne({
        where: id_institute = id_institute
    })
    if (!isValidInsitute) {
        return res.status(403).send("No existe la institución")
    }
    const {
        id_type_career,
        id_modality,
        id_time_unit,
        name,
        description,
        startDate,
        duration,
        final_title,
    } = req.body;
    try {
        const career = await Career.create({
            id_institute,
            id_type_career,
            id_modality,
            id_time_unit,
            description,
            name,
            startDate,
            duration,
            final_title,
        });
        return res.json(career);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error al crear la carrera'
        });
    }
}



