import { sequelize, DataTypes } from '../connections/db.js';

export const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    category: DataTypes.STRING(15)
}, {
    timestamps: false,
    freezeTableName: true
})

