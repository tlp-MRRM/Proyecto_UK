import {sequelize, DataTypes} from '../../db.js'

export const type_career = sequelize.define('type_career', {
    id:{
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    type: DataTypes.STRING
}, {
    timestamps: false,
});

type_career.sync({ force: false }).then(() => {
    console.log('Tabla de tipo de carrera creada');
});

