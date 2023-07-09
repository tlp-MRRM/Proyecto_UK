const {sequelize, DataTypes} = require('../db')

const ubication = sequelize.define('ubication', {
    id:{
        type: DataTypes.INTEGER(5),
        autoIncrement: true,
        primaryKey: true
    },
    idLocality: {
        type:DataTypes.INTEGER(4),
        references: {
            model:'localities',
            key: 'id'
        }
    },
    street: DataTypes.STRING(100),
    altitude: DataTypes.INTEGER(6),
    postalCode: DataTypes.INTEGER(10),
    mapLink: DataTypes.STRING(500)

}, {
    underscore : true
})

ubication.sync({ force: false }).then(() => {
    console.log('Tabla de ubicacion creada');
});