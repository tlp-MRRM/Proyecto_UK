const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')
dotenv.config({path:'.env'})
const mariadb = require('mariadb');
const path = require("path");
const connection = require("./db/connection.js")
const app = express();


//configuración del motor de plantillas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(helmet({
  contentSecurityPolicy: false  
}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// carpeta para archivos estáticos
app.use(express.static(path.join(__dirname, "public")));


// // Se ejecuta una instancia de conexión a la base de datos
// sequelize.authenticate()
//   .then(() => { 
//     console.log('Conexión a base de datos exitosa');
//  })
//   .catch((error) => console.log('Error al conectar a base de datos', error));
app.use(require('./routes/home.routes.js')) 

connection.getConnection()
  .then(conn => {
    console.log('Conexión exitosa a la base de datos.');})
  .catch(err => {
    console.error('Error al conectar a la base de datos: ', err);
  });

app.listen(process.env.port,() => {
    console.log(`Server running on port ${process.env.port}`)
})