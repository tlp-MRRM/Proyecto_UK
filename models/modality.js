const {sequelize, DataTypes} = require('../db');


const modality = sequelize.define('modality', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    modality: DataTypes.STRING(30)
}, {
    timestamps: false,
    underscored : true
});

modality.sync({ force: false }).then(() => {
    console.log('Tabla de modalidad creada');
});