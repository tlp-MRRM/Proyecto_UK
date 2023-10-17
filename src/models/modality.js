import { sequelize, DataTypes } from '../connections/db.js';

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


