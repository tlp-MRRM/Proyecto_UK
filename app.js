const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')
dotenv.config({path:'.env'})
const { sequelize } = require('./db/connection');


const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Se ejecuta una instancia de conexión a la base de datos
sequelize.authenticate()
  .then(() => { 
    console.log('Conexión a base de datos exitosa');
 })
  .catch((error) => console.log('Error al conectar a base de datos', error));

app.use(require('./routes/main.routes')) 
port = 5000;
app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})