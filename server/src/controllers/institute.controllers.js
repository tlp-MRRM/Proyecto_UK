import { Institute } from "../models/Institute.js";
import { Sequelize } from 'sequelize';
import { Ubication } from "../models/ubication.js";
import { Locality } from "../models/locality.js";
import { Career } from "../models/careers.js";

export const getMainInstituteByUser = async (req, res) => {

  const id = req.params.id;
  try {
    const mainInsitute = await Institute.findAll({
      where: {
        id_user: id,
        id_institute: null
      }
    })
    console.log('INSTITUTO:')
    console.log(mainInsitute)
    if (mainInsitute.length === 0) {
      return res.status(404).json({ message: 'Not Found' })
    }
    return res.status(200).json(mainInsitute)
  } catch (error) {
    console.log('Error al obtener los institutos del usuario ', error)
  }
}

export const getAllInstitutes = async (req, res) => {
  try {
    const institutes = await Institute.findAll();
    res.status(200).json(institutes);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getInstituteById = async (req, res) => {
  try {
    const institut = await Institute.findById(req.params.id);

    res.status(200).json(institut);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const searchInstitutes = async (req, res) => {
  const { name } = req.query; // Utiliza el nombre correcto de la columna

  try {
    const institutes = await Institute.findAll({
      where: {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${name}%` } },
          { abbreviation: { [Sequelize.Op.like]: `%${name}%` } }
        ]
      },
      include: {
        model: Ubication,
        attributes: ['street', 'altitude'],
        include: {
          model: Locality,
          attributes: ['locality']
        }
      }
    });
    console.log(institutes)
    res.json(institutes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}
export const searchCareers = async (req, res) => {
  const { name } = req.query;

  try {
    const careers = await Career.findAll({
      where: {
        [Sequelize.Op.or]:
          { name: { [Sequelize.Op.like]: `%${name}%` } }
      },
      include: [{
        model: Institute,
        attributes: ['name'],

      }]
    });
    console.log(careers);
    res.json(careers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}