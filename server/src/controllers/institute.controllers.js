import { Institute } from "../models/Institute.js";


export const getInstitutesByUser = async (req, res) => {

  const { id_user } = req.body;
  try {
    const hasInstitutes = await Institute.findAll({
      where: {
        id_user: id_user
      }
    })
    if (hasInstitutes.length == 0) {
      return res.sendStatus(404)
    }
    return res.sendStatus(200)
  } catch (error) {
    console.log('Error al obtener los institutos del usuario ', error)
  }
}

export const getInstitute = async (req, res) => {
  try {
    const institutes = await Institute.findAll();
    res.status(200).json(institutes);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getInstituteById = async (req, res) => {
  try {
    const institut = await institute.findById(req.params.id);

    res.status(200).json(institut);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



