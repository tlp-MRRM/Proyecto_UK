import { institute } from "../models/institute.js";

export const createInstituteCtrl = async (req, res) => {
    try {
      const newInstitute = await institute.create(req.body);
      res.status(201).json(req.body);
    } catch (error) {
      res.status(500).json({ error });
    }
  };
  
  export const getInstituteCtrl = async (req, res) => {
    try {
      const institutes = await institute.find();
      res.status(200).json(institutes);
    } catch (error) {
      res.status(500).json({ error });
    }
  };
  
  export const getInstituteByIdCtrl = async (req, res) => {
    try {
      const institut = await institute.findById(req.params.id);
  
      res.status(200).json(institut);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };




