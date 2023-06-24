const {sequelize, DataTypes} = require('../db/connection')

const TimeUnit = sequelize.define('TimeUnit', {
    id:{
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    unit_time: DataTypes.STRING('50')
})

TimeUnit.sync()