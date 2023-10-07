import { sequelize, DataTypes } from '../connections/db.js';
import { Contact } from './Contact.js';
import { Category } from './Category.js'
import { Ubication } from './Ubication.js';
export const Institute = sequelize.define('Institute', {
    id: {
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    abbreviation: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_institute: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
    },
    id_ubication: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
    },
    id_contact: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
    },
    year_fundation: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING(),
        allowNull: false,
    }
}, {
    freezeTableName: true,
});

Category.belongsTo(Institute);
Institute.hasMany(Ubication)
Ubication.belongsTo(Institute);
Institute.hasMany(Institute);
Institute.hasMany(Contact);
Contact.belongsTo(Institute)

Institute.sync({ force: false }).then(() => {
    console.log('Tabla de instituto creada');
});

