const {sequelize, DataTypes} = require('../db/connection');


const Modality = sequelize.define('Modality', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    modality: DataTypes.STRING(30)
});

Modality.sync()