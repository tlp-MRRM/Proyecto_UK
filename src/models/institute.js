import { sequelize, DataTypes } from '../connections/db.js';

export const Institute = sequelize.define('Institute', {
    id: {
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_institute: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
    },
    id_ubication: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
    },
    id_contact: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    abbreviation: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    year_fundation: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING(),
        allowNull: false,
    }
}, {
    freezeTableName: true,
});


