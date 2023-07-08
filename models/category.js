const {sequelize, DataTypes} = require('../db')

const category = sequelize.define('category', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    category: DataTypes.STRING(15)
}, {
    underscore : true
})

category.sync({ force: false }).then(() => {
    console.log('Tabla de categorias creada');
});