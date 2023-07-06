const {sequelize, DataTypes} = require('../db/connection');


const modality = sequelize.define('modality', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    modality: DataTypes.STRING(30)
});

modality.sync({ force: false }).then(() => {
    console.log('Tabla de modalidad creada');
});