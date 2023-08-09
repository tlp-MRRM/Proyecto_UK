const {sequelize, DataTypes} = require('../db')

const typeCareer = sequelize.define('type_career', {
    id:{
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    type: DataTypes.STRING
}, {
    timestamps: false,
});

typeCareer.sync({ force: false }).then(() => {
    console.log('Tabla de tipo de carrera creada');
});

module.exports = typeCareer;