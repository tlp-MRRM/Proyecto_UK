import { sequelize, DataTypes } from '../connections/db.js'

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

TypeCareer.sync({ force: false }).then(() => {
    console.log('Tabla de tipo de carrera creada');
});
