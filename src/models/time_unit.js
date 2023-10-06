import {sequelize, DataTypes} from '../connections/db.js';

export const time_unit = sequelize.define('time_unit', {
    id:{
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    unit_time: DataTypes.STRING('50')
}, {
    timestamps: false,
})

time_unit.sync({ force: false }).then(() => {
    console.log('Tabla de unidad de tiempo creada');
});

