import { sequelize, DataTypes } from '../database/db.js';

export const Modality = sequelize.define('Modality', {
    id: {
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    modality: DataTypes.STRING(30)
}, {
    timestamps: false,
    freezeTableName: true
});


