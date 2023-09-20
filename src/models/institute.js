import {sequelize, DataTypes} from '../../db.js';
import {contact} from './contact.js';
import {category} from './category.js'
import {ubication} from './ubication.js';
export const institute = sequelize.define('institute', {
    id: {
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull:  false,
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
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    id_institute: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
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
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

category.belongsTo(institute);
institute.hasMany(ubication)
ubication.belongsTo(institute);
institute.hasMany(institute);
institute.hasMany(contact);
contact.belongsTo(institute)

institute.sync({ force: false }).then(() => {
    console.log('Tabla de instituto creada');
});

