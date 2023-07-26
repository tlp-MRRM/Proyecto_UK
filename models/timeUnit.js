const {sequelize, DataTypes} = require('../db')

const timeUnit = sequelize.define('timeUnit', {
    id:{
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    unitTime: DataTypes.STRING('50')
}, {
    timestamps: false,
    underscored : true
})

timeUnit.sync({ force: false }).then(() => {
    console.log('Tabla de unidad de tiempo creada');
});

module.exports = timeUnit