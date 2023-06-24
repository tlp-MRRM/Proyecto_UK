const {sequelize, DataTypes} = require('../db/connection');


const Locality = sequelize.define('Locality', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    id_province: {
        type: DataTypes.INTEGER('2'),
        references: {
            model: 'provinces',
            key: 'id'
        }
    }, 
    localitie: DataTypes.STRING(255)
});

Locality.sync();