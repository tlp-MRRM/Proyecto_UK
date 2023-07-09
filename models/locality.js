const {sequelize, DataTypes} = require('../db');


const locality = sequelize.define('locality', {
    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    idProvince: {
        type: DataTypes.INTEGER(11),
        references: {
            model: 'provinces',
            key: 'id'
        }
    }, 
    locality: DataTypes.STRING(255)
}, {
    timestamps: false,
    underscore : true
});

locality.sync({ force: false }).then(() => {
    console.log('Tabla de localidad creada');
});