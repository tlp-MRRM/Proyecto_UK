import {sequelize, DataTypes} from '../db.js';

export const user = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correoElectronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  contrasenia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored:true
});

user.sync({ force: false }).then(() => {
  console.log('Tabla de usuarios creada');
});
