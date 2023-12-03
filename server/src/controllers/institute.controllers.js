import { Institute } from "../models/Institute.js";
import { Category } from "../models/Category.js";
import { Contact } from "../models/Contact.js";
import { Ubication } from "../models/Ubication.js";



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
    const institute = await Institute.findByPk(req.params.id, {
      include: [Category, Ubication, Contact],
    });
    res.status(200).json(institute)
  console.log(institute)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};




