import { Institute } from "../models/Institute.js";

export const getInstitutes = async (req, res) => {
    try {
        const institutes = await Institute.findAll();
        res.status(200).json(institutes);
    } catch (error) {
        res.status(500).json({ error });
    }
};