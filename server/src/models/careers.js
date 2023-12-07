import { sequelize, DataTypes } from '../database/db.js';

export const Career = sequelize.define('Career', {
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
    id_type_career: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    },
    id_modality: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    },
    id_institute: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    id_time_unit: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
    },
    final_title: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    freezeTableName: true,
}
)

