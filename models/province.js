const {sequelize, DataTypes} = require('../db/connection')

const province = sequelize.define('province', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    province: DataTypes.STRING(255)
})

province.sync({ force: false }).then(() => {
    console.log('Tabla de provincias creada');
});