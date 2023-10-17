import { sequelize, DataTypes } from '../connections/db.js';

export const Ubication = sequelize.define('Ubication', {
    id: {
        type: DataTypes.INTEGER(5),
        autoIncrement: true,
        primaryKey: true
    },
    id_locality: {
        type: DataTypes.INTEGER(4),
    },
    street: DataTypes.STRING(100),
    altitude: DataTypes.INTEGER(6),
    postal_code: DataTypes.INTEGER(10),
    map_link: DataTypes.STRING(500)

}, {
    freezeTableName: true
})



