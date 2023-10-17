import { sequelize, DataTypes } from '../connections/db.js';

export const TimeUnit = sequelize.define('TimeUnit', {
    id: {
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    unit_time: DataTypes.STRING('50')
}, {
    timestamps: false,
    freezeTableName: true
})


