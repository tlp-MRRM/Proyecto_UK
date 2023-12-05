// IMPORTS ------------------------------------------------------------------------ 
import { Sequelize } from 'sequelize';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import path from 'path';
import { createLogs } from './src/helpers/createLogs.js';
import { handleErrors } from './src/middlewares/handleError.js';
import { __dirname } from './src/helpers/_dirname.js'

import { Institute } from './src/models/Institute.js';

// END IMPORTS --------------------------------------------------------------------

const app = express();


//EJS CONFIG ---------------------------------------------------------------------

app.set("views", path.join(__dirname(), "../../src/views"));
app.set("view engine", "ejs");

// END EJS------------------------------------------------------------------------


// MIDDLEWARE CONFIG -------------------------------------------------------------

app.use(cookieParser())
app.use(cors());
app.use(express.static(path.join(__dirname(), "../../src/public")));
app.use(express.json());
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(handleErrors);

// LOGS
app.use(
  morgan('combined', {
    stream: {
      write: (message) => {
        createLogs(message, __dirname(), '../../logs');
      }
    }
  })
);

// END MIDDLEWARE CONFIG ---------------------------------------------------------



// DATA BASE CONNECTION ----------------------------------------------------------

import { conexionDB } from './src/database/db.js'
import { createTablesAndRelations } from './src/database/sync.js';
createTablesAndRelations()
conexionDB()

// END DB CONNECT-----------------------------------------------------------------


// ROUTES ------------------------------------------------------------------------

import renderRoutes from './src/routes/render.routes.js';
import instiRegisterRoutes from './src/routes/instRegis.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import adminRoutes from './src/routes/admin.routes.js';
import homeRoutes from './src/routes/home.routes.js';
import instituteRoutes from './src/routes/institute.routes.js';

app.use(adminRoutes)
app.use(renderRoutes)
app.use(instiRegisterRoutes) // register new institute
app.use(authRoutes) // register new user
app.use(adminRoutes);
app.use(homeRoutes)
app.use(instituteRoutes);
// ... otras rutas ...

// END ROUTES --------------------------------------------------------------------




// SERVER CONNECTION -------------------------------------------------------------

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})

// END SERVER CONNECTION ---------------------------------------------------------
