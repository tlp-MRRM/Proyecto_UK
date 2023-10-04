
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

import { createLogs } from './src/helpers/createLogs.js';
import { handleErrors } from './src/middlewares/express-validator/handleError.js';

//configuración del motor de plantillas
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");


app.use(cookieParser())



app.use(helmet({
  contentSecurityPolicy: false  
}));
app.use(cors());
app.use(
  morgan('combined', {
    stream: {
      write: (message) => {
        createLogs(message, __dirname, 'logs');
      }
    }
  })
);

app.use(handleErrors);

// carpeta para archivos estáticos
app.use(express.static(path.join(__dirname, "src/public")));
app.use(express.json());

import {conexionDB} from './db.js'
conexionDB()

//routes:
import formInstiRoutes from './src/routes/formInstitute.routes.js'
const {

} = formInstiRoutes
import homeRoutes from './src/routes/home.routes.js';
import searchRoutes from './src/routes/search.routes.js';
import loginRoutes from './src/routes/login.routes.js';
import registerUserRoutes from './src/routes/registerUser.routes.js';
import instituteRoutes from './src/routes/institute.routes.js';

app.use(formInstiRoutes);
app.use(homeRoutes);
app.use(searchRoutes);
app.use(loginRoutes);
app.use(registerUserRoutes);
app.use(instituteRoutes);



app.listen(process.env.PORT,() => {
    console.log(`Server running on port ${process.env.port}`)
})