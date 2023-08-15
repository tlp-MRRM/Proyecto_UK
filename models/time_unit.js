const {sequelize, DataTypes} = require('../db')

const timeUnit = sequelize.define('time_unit', {
    id:{
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    unit_time: DataTypes.STRING('50')
}, {
    timestamps: false,
})

timeUnit.sync({ force: false }).then(() => {
    console.log('Tabla de unidad de tiempo creada');
});

module.exports = timeUnit