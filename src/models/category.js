import {sequelize, DataTypes} from '../connections/db.js';

export const category = sequelize.define('category', {
    id:{
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    category: DataTypes.STRING(15)
}, {
    timestamps: false,
})

category.sync({ force: false }).then(() => {
    console.log('Tabla de categorias creada');
});

