import {sequelize, DataTypes} from '../../db.js';


export const contact = sequelize.define('contact', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    mail: DataTypes.STRING(250),
    tel: DataTypes.STRING(15),
    web_link: DataTypes.STRING(500)
}, {
    timestamps: false,
});

contact.sync({ force: false }).then(() => {
    console.log('Tabla de contacto creada');
});