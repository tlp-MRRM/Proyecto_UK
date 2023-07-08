const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')
const path = require("path");
const app = express();


//configuración del motor de plantillas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


dotenv.config()
app.use(helmet({
  contentSecurityPolicy: false  
}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// carpeta para archivos estáticos
app.use(express.static(path.join(__dirname, "public")));


const { conexionDB } = require('./db')
conexionDB()

app.use (require('./routes/form.insti.routes.js'));
app.use(require('./routes/home.routes.js'));



app.listen(process.env.port,() => {
    console.log(`Server running on port ${process.env.port}`)
})