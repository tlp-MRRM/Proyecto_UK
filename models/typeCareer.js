const {sequelize, DataTypes} = require('../db')

const typeCareer = sequelize.define('typeCareer', {
    id:{
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true
    },
    type: DataTypes.STRING
}, {
    timestamps: false,
    underscored : true
});

typeCareer.sync({ force: false }).then(() => {
    console.log('Tabla de tipo de carrera creada');
});

module.exports = typeCareer;