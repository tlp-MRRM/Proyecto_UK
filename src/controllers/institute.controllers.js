import { institute } from "../models/Institute.js";


export const getInstitute = async (req, res) => {
  try {
    const institutes = await institute.find();
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




