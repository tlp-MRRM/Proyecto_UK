const {sequelize, DataTypes} = require('../db/connection')

const category = sequelize.define('category', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    category: DataTypes.STRING(15)
})

category.sync({ force: false }).then(() => {
    console.log('Tabla de categorias creada');
});