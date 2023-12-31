import { sequelize, DataTypes } from '../database/db.js'

export const TypeCareer = sequelize.define('TypeCareer', {
    id: {
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    type: DataTypes.STRING
}, {
    timestamps: false,
    freezeTableName: true
});

