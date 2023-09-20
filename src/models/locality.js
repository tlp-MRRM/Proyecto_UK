import {sequelize, DataTypes} from '../../db.js';


export const locality = sequelize.define('locality', {
    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    id_province: {
        type: DataTypes.INTEGER(11),
        references: {
            model: 'provinces',
            key: 'id'
        }
    }, 
    locality: DataTypes.STRING(255)
}, {
    timestamps: false,
});

locality.sync({ force: false }).then(() => {
    console.log('Tabla de localidad creada');
});
