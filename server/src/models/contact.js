import { sequelize, DataTypes } from '../database/db.js';

export const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    mail: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    tel: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    web_link: {
        type: DataTypes.STRING(),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

