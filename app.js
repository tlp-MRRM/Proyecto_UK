
//Importantions 
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { createTransport } from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


//Initialize
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//configuración del motor de plantillas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(cookieParser())



app.use(helmet({
  contentSecurityPolicy: false  
}));
app.use(cors());
app.use(morgan('dev'));



// carpeta para archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

import {conexionDB} from './db.js'
conexionDB()

//routes:
import formInstiRoutes from './routes/formInstitute.routes.js'
const {

} = formInstiRoutes
import homeRoutes from './routes/home.routes.js';
import searchRoutes from './routes/search.routes.js';
import loginRoutes from './routes/login.routes.js';
import registerUserRoutes from './routes/registerUser.routes.js';
import instituteRoutes from './routes/institute.routes.js';

app.use(formInstiRoutes);
app.use(homeRoutes);
app.use(searchRoutes);
app.use(loginRoutes);
app.use(registerUserRoutes);
app.use(instituteRoutes);



app.listen(process.env.PORT,() => {
    console.log(`Server running on port ${process.env.port}`)
})