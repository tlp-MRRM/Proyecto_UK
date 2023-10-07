import { sequelize, DataTypes } from '../connections/db.js';


export const Locality = sequelize.define('Locality', {
    id: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    id_province: {
        type: DataTypes.INTEGER(11),
        references: {
            model: 'province',
            key: 'id'
        }
    },
    locality: DataTypes.STRING(255)
}, {
    timestamps: false,
    freezeTableName: true
});

Locality.sync({ force: false }).then(() => {
    console.log('Tabla de localidad creada');
});
