const {sequelize, DataTypes} = require('../db/connection')

const Category = sequelize.define('Category', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    category: DataTypes.STRING(15)
})

Category.sync();