import {sequelize, DataTypes} from '../db.js';

export const ubication = sequelize.define('ubication', {
    id:{
        type: DataTypes.INTEGER(5),
        autoIncrement: true,
        primaryKey: true
    },
    id_locality: {
        type:DataTypes.INTEGER(4),
        references: {
            model:'localities',
            key: 'id'
        }
    },
    street: DataTypes.STRING(100),
    altitude: DataTypes.INTEGER(6),
    postal_code: DataTypes.INTEGER(10),
    map_link: DataTypes.STRING(500)

})

ubication.sync({ force: false }).then(() => {
    console.log('Tabla de ubicacion creada');
});

