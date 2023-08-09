const {sequelize, DataTypes} = require('../db')
const contact = require('./contact');
const category = require('./category');
const ubication = require('./ubication');
const institute = sequelize.define('institute', {
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
        type:DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'categories',
        //     key: 'id'
        // }
    },
    id_institute: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
        references: {
            model: 'institutes',
            key: 'id'
        }
    },
    id_ubication: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
            model: 'ubications',
            key: 'id'
        }
    },
    id_contact: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        // references: {
        //     model: 'contacts',
        //     key: 'id'
        // }
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

module.exports = institute;
