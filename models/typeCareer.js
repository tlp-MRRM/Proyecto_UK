const {sequelize, DataTypes} = require('../db/connection')

const TypeCareer = sequelize.define('TypeCareer', {
    id:{
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    type: DataTypes.STRING
});

TypeCareer.sync()