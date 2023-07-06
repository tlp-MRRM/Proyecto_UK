const {sequelize, DataTypes} = require('../db/connection');


const locality = sequelize.define('locality', {
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
    locality: DataTypes.STRING(255)
});

locality.sync({ force: false }).then(() => {
    console.log('Tabla de localidad creada');
});