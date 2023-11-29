import { Institute } from "../models/Institute.js";


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




