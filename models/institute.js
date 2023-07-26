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
    idCategory: {
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    idInstitute: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
        references: {
            model: 'institutes',
            key: 'id'
        }
    },
    idUbication: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
            model: 'ubications',
            key: 'id'
        }
    },
    idContact: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
            model: 'contacts',
            key: 'id'
        }
    },
    yearFundation: {
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
}, {
    underscored : true
});

category.belongsTo(institute, { foreignKey: 'idCategory', as: 'id' });
ubication.belongsTo(institute, { foreignKey: 'idUbication', as: 'id' });
institute.hasMany(institute, { foreignKey: 'idInstitute', as: 'institutes' });
contact.belongsTo(institute, { foreignKey: 'idContact', as: 'id' });

institute.sync({ force: false }).then(() => {
    console.log('Tabla de instituto creada');
});

module.exports = institute;
