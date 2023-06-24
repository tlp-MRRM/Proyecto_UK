const {sequelize, DataTypes} = require('../db/connection');

const Contact = sequelize.define('Contact', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    mail: DataTypes.STRING(250),
    tel: DataTypes.STRING(15),
    weblink: DataTypes.STRING(500)
});

Contact.sync();