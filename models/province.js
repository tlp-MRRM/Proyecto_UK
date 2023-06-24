const {sequelize, DataTypes} = require('../db/connection')

const Province = sequelize.define('Province', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    province: DataTypes.STRING(255)
})

Province.sync();