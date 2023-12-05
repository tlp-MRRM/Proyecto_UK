import { Router } from "express";
import { searchCareers, searchInstitutes } from "../controllers/institute.controllers.js";

const homeRoutes = Router();

homeRoutes.get("/api/search-institutes", searchInstitutes);
homeRoutes.get('/api/search-careers', searchCareers);

export default homeRoutes;