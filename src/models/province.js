import { sequelize, DataTypes } from '../connections/db.js';

export const Province = sequelize.define('Province', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true
    },
    province: DataTypes.STRING(255)
}, {
    timestamps: false,
    freezeTableName: true
})

Province.sync({ force: false }).then(() => {
    console.log('Tabla de provincias creada');
});

