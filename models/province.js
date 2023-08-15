const {sequelize, DataTypes} = require('../db')

const province = sequelize.define('province', {
    id:{
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true
    },
    province: DataTypes.STRING(255)
}, {
    timestamps: false,
})

province.sync({ force: false }).then(() => {
    console.log('Tabla de provincias creada');
});

module.exports = province