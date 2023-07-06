const {sequelize, DataTypes} = require('../db/connection');

const contact = sequelize.define('contact', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    mail: DataTypes.STRING(250),
    tel: DataTypes.STRING(15),
    weblink: DataTypes.STRING(500)
});

contact.sync({ force: false }).then(() => {
    console.log('Tabla de contacto creada');
});