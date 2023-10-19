import { sequelize, DataTypes } from '../database/db.js';

export const Locality = sequelize.define('Locality', {
    id: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    id_province: {
        type: DataTypes.INTEGER(11),
    },
    locality: DataTypes.STRING(255)
}, {
    timestamps: false,
    freezeTableName: true
});

