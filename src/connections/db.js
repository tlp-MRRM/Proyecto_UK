// Se importan las clases de la librería
import {Sequelize, Model, DataTypes, Transaction} from 'sequelize'

// Se crea una instancia de la conexión a la base de datos
export const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT || 'mysql'
    });

export const conexionDB = async () => {
      try {
          await sequelize.authenticate()
          console.log('Conexion a la base de datos exitosa');
      } catch (error) {
          console.log('Error al conectar a la base de datos', error);
      }
}
  
// Se exportan la conexión a MySQL, Model y DataTypes para poder usarlas en los modelos
export {Model, DataTypes}

