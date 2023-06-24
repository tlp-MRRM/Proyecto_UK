const {sequelize, DataTypes} = require('../db/connection')

const StartDate = sequelize.define('StartDate', {
    id:{
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    day: {
        type: DataTypes.INTEGER(2),
        allowNull: true
    },
    month: {
        type: DataTypes.INTEGER(2), 
        allowNull: true
    },
    year: {
        type: DataTypes.INTEGER(4)
    }
});

StartDate.sync()