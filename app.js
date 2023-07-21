const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')
const path = require("path");
const app = express();
const cookieParser = require('cookie-parser');


//configuración del motor de plantillas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(cookieParser())




dotenv.config()
app.use(helmet({
  contentSecurityPolicy: false  
}));
app.use(cors());
app.use(morgan('dev'));



// carpeta para archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


const { conexionDB } = require('./db')
conexionDB()

app.use(require('./routes/formInstitute.routes.js'));
app.use(require('./routes/home.routes.js'));
app.use(require('./routes/search.routes.js'));




app.listen(process.env.PORT,() => {
    console.log(`Server running on port ${process.env.port}`)
})